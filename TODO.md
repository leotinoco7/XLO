## Todo

- [ ] Test cpf & email validator on create user endpoint
- [ ] Create [User] Battle
- [ ] Create Marketplace
- [ ] Create Seed

## In Progress
- [ ] Add findAll 'myaccount/cards' [User] controller
- [ ] Change '/GET' findOneCollection return
- [ ] Add findAll 'cards' [Card] controller
- [ ] Refactor findOne [Collection] controller (select cards[])

## Done ✓

- [x] Schema relation
- [x] Refactor [User] service 
      - [x] Create [Admin] endpoints 
      - [x] Create [MyAccount] endpoints 
      - [x] Fix Update myAccount [User] 
      - [x] Create ApiOperations [User]
      - [x] Add findOne 'myaccount/album' [User] controller
- [x] Refactor [Collection] service 
      - [x] Fix Create [Collection] unique name 
      - [x] Remove AuthGuard [collection] findAll & findOne 
      - [x] Create ApiOperations [Collection]
- [x] Refactor [Deck] service
      - [x] Create ApiOperations [Deck]
- [x] Refactor [Card] service - [x] Treat Rarity input [Card]
- [x] Refactor [Pack] service - [x] Create function pack() - [x] Create ApiOperations [Pack]
- [x] Reorganize Swagger
