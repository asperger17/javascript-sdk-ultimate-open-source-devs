/*
    Simulator user interactions with the app (app.js)
*/
require('dotenv').config();

const log = require('signale');
const Throttle = require('promise-parallel-throttle');

const { Simulator } = require('..');

const ussdChannel = {
    number: process.env.USSD_CODE,
    channel: 'ussd',
};

const client = new Simulator({
    appId: process.env.APP_ID,
    orgId: process.env.ORG_ID,
    apiKey: process.env.API_KEY,
});

let repaidLoans = 0;
let receivedLoans = 0;
let receivedSms = 0;
let receivedCalls = 0;

client.on('sendMessage', () => {
    // const { customerNumber, message: { body: { text } } } = data;
    // log.warn(`${customerNumber.number}: Message Received\n${text}\n`);
    receivedSms += 1;
});

client.on('makeVoiceCall', () => {
    // const { customerNumber } = data;
    // log.warn(`${customerNumber.number}: Call Received`);
    receivedCalls += 1;
});

client.on('sendCustomerPayment', (data) => {
    const { customerNumber, channelNumber, value } = data;
    /*
    log.success(`${customerNumber.number}: Payment Received ${value.currencyCode} ${value.amount}`);
    */
    receivedLoans += 1;
    setTimeout(async () => {
        // log.info(`${customerNumber.number}: Repaying loan...`);
        await client.receivePayment(`sim_txn_${Date.now()}`, customerNumber.number, channelNumber, value, 'success');
        repaidLoans += 1;
    }, 220000);
});

client.on('sendChannelPayment', (data) => {
    log.debug('sendChannelPayment', data);
});

client.on('checkoutPayment', (data) => {
    log.debug('checkoutPayment', data);
});

client
    .connect()
    .on('error', (error) => {
        log.error('Failed to connect: ', error);
    })
    .on('connected', async () => {
        log.success('Simulator running...');

        try {
            const randomNumbers = (quantity, max) => {
                const set = new Set();
                while (set.size < quantity) {
                    set.add(Math.floor(Math.random() * max) + 1);
                }
                return set;
            };

            const dialLoanApp = async (customerNumber, count) => {
                try {
                    let res = await client.receiveMessage(customerNumber, ussdChannel, `${Date.now()}`, [{ ussd: { text: '', status: 'active' } }]);
                    if (!res.status) {
                        throw new Error(res.description);
                    }

                    if (res.message.body.ussd.isTerminal) {
                        log.warn(`${customerNumber}: ${res.message.body.ussd.text}`);
                        return;
                    }

                    res = await client.receiveMessage(customerNumber, ussdChannel, `${Date.now()}`, [{ ussd: { text: '1', status: 'active' } }]);
                    if (!res.status) {
                        throw new Error(res.description);
                    }

                    res = await client.receiveMessage(customerNumber, ussdChannel, `${Date.now()}`, [{ ussd: { text: `Tester #${count}`, status: 'active' } }]);
                    if (!res.status) {
                        throw new Error(res.description);
                    }

                    res = await client.receiveMessage(customerNumber, ussdChannel, `${Date.now()}`, [{ ussd: { text: '100', status: 'completed' } }]);
                    if (!res.status) {
                        throw new Error(res.description);
                    }

                    // log.success(`${customerNumber}:\n${res.message.body.ussd.text}`);
                } catch (error) {
                    log.warn(`Failed to request loan for ${customerNumber}: ${error.message}`);
                }
            };

            log.info('Running loan requests...');
            const count = 10;
            const max = 999999;
            const prefix = '+254790';
            const suffixes = Array.from(randomNumbers(count, max));
            const customerNumbers = suffixes.map((item) => `${prefix}${item.toString().padStart(max.toString().length, '0')}`);
            const tasks = customerNumbers.map((num, idx) => () => dialLoanApp(num, idx + 1));

            setInterval(() => {
                log.info(`
Issued Loans: ${receivedLoans}/${count}
Repaid Loans: ${repaidLoans}/${receivedLoans}
Received SMSs: ${receivedSms}/${receivedLoans * 4}
Received Calls: ${receivedCalls}/${receivedLoans}
            `);
            }, 5000);

            await Throttle.all(tasks, {
                maxInProgress: 2,
                failFast: false,
            });
        } catch (error) {
            log.error(error);
        }
    });
