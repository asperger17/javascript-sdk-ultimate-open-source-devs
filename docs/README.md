## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd></dd>
<dt><a href="#Customer">Customer</a></dt>
<dd></dd>
<dt><a href="#Elarian">Elarian</a> ⇐ <code><a href="#Client">Client</a></code></dt>
<dd></dd>
<dt><a href="#Simulator">Simulator</a> ⇐ <code><a href="#Client">Client</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#initializeClient">initializeClient(config)</a> ⇒ <code><a href="#Elarian">Elarian</a></code></dt>
<dd><p>Initialize a client</p></dd>
<dt><a href="#initializeSimulator">initializeSimulator(config)</a> ⇒ <code><a href="#Simulator">Simulator</a></code></dt>
<dd><p>Initialize a simulator client</p></dd>
</dl>

<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client(config)](#new_Client_new)
    * [.connect()](#Client+connect) ⇒ [<code>Elarian</code>](#Elarian)
    * [.isConnected()](#Client+isConnected) ⇒ <code>boolean</code>
    * [.disconnect()](#Client+disconnect)
    * [.registerNotificationHandler(event, handler)](#Client+registerNotificationHandler) ⇒ [<code>Client</code>](#Client)
    * [.on(event, handler)](#Client+on) ⇒ [<code>Client</code>](#Client)

<a name="new_Client_new"></a>

### new Client(config)
<p>Instantiate an elarian client. You have to call connect() on then client to start using it</p>


| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

<a name="Client+connect"></a>

### client.connect() ⇒ [<code>Elarian</code>](#Elarian)
<p>Connecto to elarian servers</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: [<code>Elarian</code>](#Elarian) - <p>this instance</p>  
<a name="Client+isConnected"></a>

### client.isConnected() ⇒ <code>boolean</code>
<p>Check if client is connected</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+disconnect"></a>

### client.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Client</code>](#Client)  
<a name="Client+registerNotificationHandler"></a>

### client.registerNotificationHandler(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Client+on"></a>

### client.on(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Client</code>](#Client)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Customer"></a>

## Customer
**Kind**: global class  

* [Customer](#Customer)
    * [new Customer(params)](#new_Customer_new)
    * [.getState()](#Customer+getState) ⇒ <code>CustomerState</code>
    * [.adoptState(otherCustomer)](#Customer+adoptState) ⇒ <code>CustomerStateUpdateReply</code>
    * [.sendMessage(channelNumber, message)](#Customer+sendMessage) ⇒ <code>MessageReply</code>
    * [.replyToMessage(messageId, message)](#Customer+replyToMessage) ⇒ <code>MessageReply</code>
    * [.updateActivity(source, activity)](#Customer+updateActivity) ⇒ <code>CustomerStateUpdateReply</code>
    * [.updateMessagingConsent(channelNumber, action)](#Customer+updateMessagingConsent) ⇒ <code>ConsentUpdateReply</code>
    * [.leaseAppData()](#Customer+leaseAppData) ⇒ <code>LeasedAppData</code>
    * [.updateAppData(data)](#Customer+updateAppData) ⇒ <code>CustomerStateUpdateReply</code>
    * [.deleteAppData()](#Customer+deleteAppData) ⇒ <code>CustomerStateUpdateReply</code>
    * [.getMetadata()](#Customer+getMetadata) ⇒ <code>Object</code>
    * [.updateMetadata(metadata)](#Customer+updateMetadata) ⇒ <code>CustomerStateUpdateReply</code>
    * [.deleteMetadata(keys)](#Customer+deleteMetadata) ⇒ <code>CustomerStateUpdateReply</code>
    * [.getSecondaryIds()](#Customer+getSecondaryIds) ⇒ <code>Array.&lt;SecondaryId&gt;</code>
    * [.updateSecondaryIds(secondaryIds)](#Customer+updateSecondaryIds) ⇒ <code>CustomerStateUpdateReply</code>
    * [.deleteSecondaryIds(secondaryIds)](#Customer+deleteSecondaryIds) ⇒ <code>CustomerStateUpdateReply</code>
    * [.getTags()](#Customer+getTags) ⇒ <code>Array.&lt;Tag&gt;</code>
    * [.updateTags(tags)](#Customer+updateTags) ⇒ <code>CustomerStateUpdateReply</code>
    * [.deleteTags(tags)](#Customer+deleteTags) ⇒ <code>CustomerStateUpdateReply</code>
    * [.addReminder(reminder)](#Customer+addReminder) ⇒ <code>CustomerStateUpdateReply</code>
    * [.cancelReminder(key)](#Customer+cancelReminder) ⇒ <code>CustomerStateUpdateReply</code>

<a name="new_Customer_new"></a>

### new Customer(params)
<p>A customer is your end-user, represented by a number (from a cellular, facebook or telegram)</p>


| Param | Type |
| --- | --- |
| params | <code>CustomerParams</code> | 

<a name="Customer+getState"></a>

### customer.getState() ⇒ <code>CustomerState</code>
<p>Fetch the customer's current state.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+adoptState"></a>

### customer.adoptState(otherCustomer) ⇒ <code>CustomerStateUpdateReply</code>
<p>Merge otherCustomer's state into this customer's state and discard otherCustomer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| otherCustomer | [<code>Customer</code>](#Customer) | 

<a name="Customer+sendMessage"></a>

### customer.sendMessage(channelNumber, message) ⇒ <code>MessageReply</code>
<p>Send a message to the customer from the specified channel number.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| channelNumber | <code>MessagingChannelNumber</code> | 
| message | <code>Message</code> | 

<a name="Customer+replyToMessage"></a>

### customer.replyToMessage(messageId, message) ⇒ <code>MessageReply</code>
<p>Reply to a message</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| messageId | <code>string</code> | 
| message | <code>Message</code> | 

<a name="Customer+updateActivity"></a>

### customer.updateActivity(source, activity) ⇒ <code>CustomerStateUpdateReply</code>
<p>Initiate a customer activity</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| source | <code>string</code> | 
| activity | <code>Activity</code> | 

<a name="Customer+updateMessagingConsent"></a>

### customer.updateMessagingConsent(channelNumber, action) ⇒ <code>ConsentUpdateReply</code>
<p>Allow or block a customer from receiving messages from a channel</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type | Description |
| --- | --- | --- |
| channelNumber | <code>MessagingChannelNumber</code> |  |
| action | <code>string</code> | <p>allow or block</p> |

<a name="Customer+leaseAppData"></a>

### customer.leaseAppData() ⇒ <code>LeasedAppData</code>
<p>Fetches the customer's app data and lock it from fetching(for up to <b>90s</b>)
until next call to update app data.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+updateAppData"></a>

### customer.updateAppData(data) ⇒ <code>CustomerStateUpdateReply</code>
<p>Sets some app data on the customer.
Values in the data object can either be strings or buffers,
depending on the set serializer. @see [ConnectionOptions](ConnectionOptions)</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="Customer+deleteAppData"></a>

### customer.deleteAppData() ⇒ <code>CustomerStateUpdateReply</code>
<p>Remove customer's app data</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+getMetadata"></a>

### customer.getMetadata() ⇒ <code>Object</code>
<p>Fetch customer metadata</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+updateMetadata"></a>

### customer.updateMetadata(metadata) ⇒ <code>CustomerStateUpdateReply</code>
<p>Sets some metadata on the customer.
Values in the metadata object can either be strings or buffers,
depending on the set serializer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| metadata | <code>Object</code> | 

<a name="Customer+deleteMetadata"></a>

### customer.deleteMetadata(keys) ⇒ <code>CustomerStateUpdateReply</code>
<p>Remove some metadata from a customer. <code>keys</code> is an array of strings</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | 

<a name="Customer+getSecondaryIds"></a>

### customer.getSecondaryIds() ⇒ <code>Array.&lt;SecondaryId&gt;</code>
<p>Fetch customer secondaryIds</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+updateSecondaryIds"></a>

### customer.updateSecondaryIds(secondaryIds) ⇒ <code>CustomerStateUpdateReply</code>
<p>Update a customer's secondary Ids</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Customer+deleteSecondaryIds"></a>

### customer.deleteSecondaryIds(secondaryIds) ⇒ <code>CustomerStateUpdateReply</code>
<p>Remove some secondary Ids from a customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| secondaryIds | <code>Array.&lt;SecondaryId&gt;</code> | 

<a name="Customer+getTags"></a>

### customer.getTags() ⇒ <code>Array.&lt;Tag&gt;</code>
<p>Fetch customer tags</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  
<a name="Customer+updateTags"></a>

### customer.updateTags(tags) ⇒ <code>CustomerStateUpdateReply</code>
<p>Update a customer's tag list.</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| tags | <code>Array.&lt;Tag&gt;</code> | 

<a name="Customer+deleteTags"></a>

### customer.deleteTags(tags) ⇒ <code>CustomerStateUpdateReply</code>
<p>Remove some tags from a customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| tags | <code>Array.&lt;string&gt;</code> | 

<a name="Customer+addReminder"></a>

### customer.addReminder(reminder) ⇒ <code>CustomerStateUpdateReply</code>
<p>Set a reminder to be triggered at the specified time for a particular customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| reminder | <code>Reminder</code> | 

<a name="Customer+cancelReminder"></a>

### customer.cancelReminder(key) ⇒ <code>CustomerStateUpdateReply</code>
<p>Cancels a previously set reminder with the key <code>key</code> on the customer</p>

**Kind**: instance method of [<code>Customer</code>](#Customer)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="Elarian"></a>

## Elarian ⇐ [<code>Client</code>](#Client)
**Kind**: global class  
**Extends**: [<code>Client</code>](#Client)  

* [Elarian](#Elarian) ⇐ [<code>Client</code>](#Client)
    * [new Elarian(config)](#new_Elarian_new)
    * [.Customer](#Elarian+Customer)
        * [new this.Customer()](#new_Elarian+Customer_new)
    * [.generateAuthToken()](#Elarian+generateAuthToken) ⇒ <code>AuthToken</code>
    * [.initializeCustomer(params)](#Elarian+initializeCustomer) ⇒
    * [.deleteCustomer(customerParams)](#Elarian+deleteCustomer) ⇒
    * [.sendMessageByTag(tag, channelNumber, message)](#Elarian+sendMessageByTag) ⇒ <code>TagUpdateReply</code>
    * [.replayMessagingConsentUpdate(customerNumber, channelNumber, consent, updatedAt)](#Elarian+replayMessagingConsentUpdate)
    * [.replayMessageReactionUpdate(customerNumber, channelNumber, messageId, reaction, updatedAt)](#Elarian+replayMessageReactionUpdate)
    * [.replayMessagingSession(customerNumber, channelNumber, sessionUpdate)](#Elarian+replayMessagingSession)
    * [.replayMessageStatusUpdate(customerNumber, channelNumber, statusUpdate)](#Elarian+replayMessageStatusUpdate)
    * [.replayReceivedMessage(customerNumber, channelNumber, receivedMessage)](#Elarian+replayReceivedMessage)
    * [.replaySentMessage(customerNumber, channelNumber, sentMessage)](#Elarian+replaySentMessage)
    * [.initiatePayment(debitParty, creditParty, value, narration)](#Elarian+initiatePayment) ⇒ <code>InitiatePaymentReply</code>
    * [.replayPayment(transactionId, debitParty, creditParty, status, value, narration, updatedAt)](#Elarian+replayPayment) ⇒ <code>ReplayPaymentReply</code>
    * [.replayPaymentStatusUpdate(customerNumber, transactionId, status, updatedAt)](#Elarian+replayPaymentStatusUpdate) ⇒ <code>ReplayPaymentReply</code>
    * [.addCustomerReminderByTag(tag, reminder)](#Elarian+addCustomerReminderByTag) ⇒ <code>TagUpdateReply</code>
    * [.cancelCustomerReminderByTag(tag, key)](#Elarian+cancelCustomerReminderByTag) ⇒ <code>TagUpdateReply</code>
    * [._createCustomer(customerNumber)](#Elarian+_createCustomer) ⇒ <code>CustomerStateUpdateReply</code>
    * [._deleteCustomer(customer)](#Elarian+_deleteCustomer) ⇒ <code>DeleteCustomerReply</code>
    * [.connect()](#Client+connect) ⇒ [<code>Elarian</code>](#Elarian)
    * [.isConnected()](#Client+isConnected) ⇒ <code>boolean</code>
    * [.disconnect()](#Client+disconnect)
    * [.registerNotificationHandler(event, handler)](#Client+registerNotificationHandler) ⇒ [<code>Client</code>](#Client)
    * [.on(event, handler)](#Client+on) ⇒ [<code>Client</code>](#Client)

<a name="new_Elarian_new"></a>

### new Elarian(config)
<p>Instantiate an elarian client. You have to call connect() on the client to start using it</p>


| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

<a name="Elarian+Customer"></a>

### elarian.Customer
**Kind**: instance class of [<code>Elarian</code>](#Elarian)  
<a name="new_Elarian+Customer_new"></a>

#### new this.Customer()
<p>A customer object. @see [Customer](#Customer)</p>

<a name="Elarian+generateAuthToken"></a>

### elarian.generateAuthToken() ⇒ <code>AuthToken</code>
<p>Generate a short-lived auth token to use instead of apiKey. Used for browser and mobile clients.</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Elarian+initializeCustomer"></a>

### elarian.initializeCustomer(params) ⇒
<p>Iitialize a customer</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: <p>Customer</p>  

| Param | Type |
| --- | --- |
| params | <code>CustomerParams</code> | 

<a name="Elarian+deleteCustomer"></a>

### elarian.deleteCustomer(customerParams) ⇒
<p>Delete a customer</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: <p>DeleteCustomerReply</p>  

| Param | Type |
| --- | --- |
| customerParams | <code>CustomerParams</code> | 

<a name="Elarian+sendMessageByTag"></a>

### elarian.sendMessageByTag(tag, channelNumber, message) ⇒ <code>TagUpdateReply</code>
<p>Send message by tag</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| message | <code>Message</code> | 

<a name="Elarian+replayMessagingConsentUpdate"></a>

### elarian.replayMessagingConsentUpdate(customerNumber, channelNumber, consent, updatedAt)
<p>Replay a messaging consent update event</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>MessagingChannel</code> | 
| consent | <code>string</code> | 
| updatedAt | <code>number</code> | 

<a name="Elarian+replayMessageReactionUpdate"></a>

### elarian.replayMessageReactionUpdate(customerNumber, channelNumber, messageId, reaction, updatedAt)
<p>Replay a message reaction update event</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>MessagingChannel</code> | 
| messageId | <code>string</code> | 
| reaction | <code>string</code> | 
| updatedAt | <code>number</code> | 

<a name="Elarian+replayMessagingSession"></a>

### elarian.replayMessagingSession(customerNumber, channelNumber, sessionUpdate)
<p>Replay a messaging session event</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>MessagingChannel</code> | 
| sessionUpdate | <code>MessageSessionUpdate</code> | 

<a name="Elarian+replayMessageStatusUpdate"></a>

### elarian.replayMessageStatusUpdate(customerNumber, channelNumber, statusUpdate)
<p>Replay a messaging status event</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>MessagingChannel</code> | 
| statusUpdate | <code>MessageStatusUpdate</code> | 

<a name="Elarian+replayReceivedMessage"></a>

### elarian.replayReceivedMessage(customerNumber, channelNumber, receivedMessage)
<p>Replay a received message event</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>MessagingChannel</code> | 
| receivedMessage | <code>ReceivedMessage</code> | 

<a name="Elarian+replaySentMessage"></a>

### elarian.replaySentMessage(customerNumber, channelNumber, sentMessage)
<p>Replay a sent message event</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>CustomerNumber</code> | 
| channelNumber | <code>MessagingChannel</code> | 
| sentMessage | <code>SentMessage</code> | 

<a name="Elarian+initiatePayment"></a>

### elarian.initiatePayment(debitParty, creditParty, value, narration) ⇒ <code>InitiatePaymentReply</code>
<p>Initiate a payment transaction</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| debitParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> | 
| creditParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> \| <code>ChannelPayment</code> | 
| value | <code>Cash</code> | 
| narration | <code>string</code> | 

<a name="Elarian+replayPayment"></a>

### elarian.replayPayment(transactionId, debitParty, creditParty, status, value, narration, updatedAt) ⇒ <code>ReplayPaymentReply</code>
<p>Replay a payment</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> |  |
| debitParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> |  |
| creditParty | <code>CustomerPayment</code> \| <code>Wallet</code> \| <code>Purse</code> \| <code>ChannelPayment</code> |  |
| status | <code>string</code> | <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]</p> |
| value | <code>Cash</code> |  |
| narration | <code>string</code> |  |
| updatedAt | <code>number</code> |  |

<a name="Elarian+replayPaymentStatusUpdate"></a>

### elarian.replayPaymentStatusUpdate(customerNumber, transactionId, status, updatedAt) ⇒ <code>ReplayPaymentReply</code>
<p>Replay a payment status update</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type | Description |
| --- | --- | --- |
| customerNumber | <code>CustomerNumber</code> |  |
| transactionId | <code>string</code> |  |
| status | <code>string</code> | <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, failed, throttled, expired, rejected, reversed]</p> |
| updatedAt | <code>number</code> |  |

<a name="Elarian+addCustomerReminderByTag"></a>

### elarian.addCustomerReminderByTag(tag, reminder) ⇒ <code>TagUpdateReply</code>
<p>Set a reminder to be triggered at the specified time for customers with the particular tag</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| reminder | <code>Reminder</code> | 

<a name="Elarian+cancelCustomerReminderByTag"></a>

### elarian.cancelCustomerReminderByTag(tag, key) ⇒ <code>TagUpdateReply</code>
<p>Cancels a previously set reminder with tag <code>tag</code> and key <code>key</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| tag | <code>Tag</code> | 
| key | <code>string</code> | 

<a name="Elarian+_createCustomer"></a>

### elarian.\_createCustomer(customerNumber) ⇒ <code>CustomerStateUpdateReply</code>
<p>Create a customer</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customerNumber | <code>\*</code> | 

<a name="Elarian+_deleteCustomer"></a>

### elarian.\_deleteCustomer(customer) ⇒ <code>DeleteCustomerReply</code>
<p>Delete a customer using the Customer Number</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  

| Param | Type |
| --- | --- |
| customer | [<code>Customer</code>](#Customer) | 

<a name="Client+connect"></a>

### elarian.connect() ⇒ [<code>Elarian</code>](#Elarian)
<p>Connecto to elarian servers</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: [<code>Elarian</code>](#Elarian) - <p>this instance</p>  
<a name="Client+isConnected"></a>

### elarian.isConnected() ⇒ <code>boolean</code>
<p>Check if client is connected</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Client+disconnect"></a>

### elarian.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
<a name="Client+registerNotificationHandler"></a>

### elarian.registerNotificationHandler(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Client+on"></a>

### elarian.on(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Elarian</code>](#Elarian)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Simulator"></a>

## Simulator ⇐ [<code>Client</code>](#Client)
**Kind**: global class  
**Extends**: [<code>Client</code>](#Client)  

* [Simulator](#Simulator) ⇐ [<code>Client</code>](#Client)
    * [new Simulator(config)](#new_Simulator_new)
    * [.receiveMessage(phoneNumber, channelNumber, sessionId, parts, cost)](#Simulator+receiveMessage)
    * [.receivePayment(transactionId, customerNumber, channelNumber, value, status)](#Simulator+receivePayment)
    * [.updatePaymentStatus(transactionId, status)](#Simulator+updatePaymentStatus)
    * [.connect()](#Client+connect) ⇒ [<code>Elarian</code>](#Elarian)
    * [.isConnected()](#Client+isConnected) ⇒ <code>boolean</code>
    * [.disconnect()](#Client+disconnect)
    * [.registerNotificationHandler(event, handler)](#Client+registerNotificationHandler) ⇒ [<code>Client</code>](#Client)
    * [.on(event, handler)](#Client+on) ⇒ [<code>Client</code>](#Client)

<a name="new_Simulator_new"></a>

### new Simulator(config)
<p>Instantiate an elarian simulator client</p>


| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

<a name="Simulator+receiveMessage"></a>

### simulator.receiveMessage(phoneNumber, channelNumber, sessionId, parts, cost)
<p>Initiate a message request</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| phoneNumber | <code>string</code> | 
| channelNumber | <code>MessagingChannelNumber</code> | 
| sessionId | <code>string</code> | 
| parts | <code>Array.&lt;InboundMessageBody&gt;</code> | 
| cost | <code>Cash</code> | 

<a name="Simulator+receivePayment"></a>

### simulator.receivePayment(transactionId, customerNumber, channelNumber, value, status)
<p>Initiate payment request</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> |  |
| customerNumber | <code>string</code> |  |
| channelNumber | <code>PaymentChannelNumber</code> |  |
| value | <code>Cash</code> |  |
| status | <code>string</code> | <p>one of [queued, pending_confirmation, pending_validation, validated, invalid_request, not_supported, insufficient_funds, application_error, not_allowed, duplicate_request, invalid_purse, invalid_wallet, decommissioned_customer_id, success, pass_through, failed, throttled, expired, rejected, reversed]</p> |

<a name="Simulator+updatePaymentStatus"></a>

### simulator.updatePaymentStatus(transactionId, status)
<p>Update payment status</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  

| Param | Type |
| --- | --- |
| transactionId | <code>string</code> | 
| status | <code>string</code> | 

<a name="Client+connect"></a>

### simulator.connect() ⇒ [<code>Elarian</code>](#Elarian)
<p>Connecto to elarian servers</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  
**Returns**: [<code>Elarian</code>](#Elarian) - <p>this instance</p>  
<a name="Client+isConnected"></a>

### simulator.isConnected() ⇒ <code>boolean</code>
<p>Check if client is connected</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  
<a name="Client+disconnect"></a>

### simulator.disconnect()
<p>Disconnect from the elarian server</p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  
<a name="Client+registerNotificationHandler"></a>

### simulator.registerNotificationHandler(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.on(event,listener)</code></p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="Client+on"></a>

### simulator.on(event, handler) ⇒ [<code>Client</code>](#Client)
<p>Register a listener to watch out for events. Can also be called with <code>client.registerListerner(event,listener)</code></p>

**Kind**: instance method of [<code>Simulator</code>](#Simulator)  
**Returns**: [<code>Client</code>](#Client) - <p>this instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | <p>The event whose listener to register</p> |
| handler | <code>NotificationHandler</code> | <p>A function that reacts to events</p> |

<a name="initializeClient"></a>

## initializeClient(config) ⇒ [<code>Elarian</code>](#Elarian)
<p>Initialize a client</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

<a name="initializeSimulator"></a>

## initializeSimulator(config) ⇒ [<code>Simulator</code>](#Simulator)
<p>Initialize a simulator client</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>ClientConfig</code> | 

