import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserdatasourceDataSource} from '../datasources';
import {Users, UsersRelations} from '../models';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.idUser,
  UsersRelations
> {
  constructor(
    @inject('datasources.userdatasource') dataSource: UserdatasourceDataSource,
  ) {
    super(Users, dataSource);
  }
}
