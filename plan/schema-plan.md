# Create prisma models
## Users model
- A user should have an id field with the attribute of autoIncrement
- A user should have an username and password field.
- A user should have an avatar field that will take the url of the avatar file
- A user should have an bio field where they can set/update their about me.

## Messages model
- Message model should have an id field with the attribute of autoIncrement
- Message model should have the `sender_id` field of sender and the `reciever_id` of the reciever.
- Message model should have a field of content that will be a string (later update the logic to allow file/image uploads)
- Message model should have a field of time that states when the message was sent.

## Friendlist
- Friendlist must have an id field
- Friendlist must have the `user_01` id and `user_02` id
- Friendlist must have a value (boolean) that tells whether they are friend or not


Nice to have:
## File
- File must have an id field
- File must have user_id to know which user it belongs to
- File must have the type (extension)