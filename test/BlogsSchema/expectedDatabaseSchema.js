// @flow

import type {DatabaseSchema} from '../../src/types';

const schema: DatabaseSchema = {
  tables: [
    {
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          primaryKey: true,
          nonNull: true,
        },
        {
          name: 'email',
          type: 'varchar(255)',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'password_hash',
          type: 'varchar(255)',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'first_name',
          type: 'varchar(255)',
          primaryKey: false,
          nonNull: false,
        },
        {
          name: 'last_name',
          type: 'varchar(255)',
          primaryKey: false,
          nonNull: false,
        },
      ]
    },
    {
      name: 'posts',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          primaryKey: true,
          nonNull: true,
        },
        {
          name: 'title',
          type: 'varchar(255)',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'text',
          type: 'text',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'authored_by_user_id',
          type: 'uuid',
          primaryKey: false,
          nonNull: true,
          references: {
            table: 'users',
            column: 'id',
          }
        },
      ],
    },
    {
      name: 'comments',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          primaryKey: true,
          nonNull: true,
        },
        {
          name: 'text',
          type: 'text',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          primaryKey: false,
          nonNull: true,
        },
        {
          name: 'authored_by_user_id',
          type: 'uuid',
          primaryKey: false,
          nonNull: false,
          references: {
            table: 'users',
            column: 'id',
          }
        },
        {
          name: 'inspired_by_post_id',
          type: 'uuid',
          primaryKey: false,
          nonNull: true,
          references: {
            table: 'posts',
            column: 'id',
          }
        },
      ],
    },
    {
      name: 'user_followed_users',
      columns: [
        {
          name: 'user_id',
          type: 'uuid',
          primaryKey: false,
          nonNull: true,
          references: {
            table: 'users',
            column: 'id',
          }
        },
        {
          name: 'followed_user_id',
          type: 'uuid',
          primaryKey: false,
          nonNull: true,
          references: {
            table: 'users',
            column: 'id',
          }
        }
      ],
      constraints: [
        {
          type: 'unique',
          columns: ['user_id', 'followed_user_id']
        }
      ]
    },
  ],
  indices: [
    {
      table: 'users',
      columns: ['id'],
    },
    {
      table: 'posts',
      columns: ['id'],
    },
    {
      table: 'comments',
      columns: ['id'],
    },
    {
      table: 'user_followed_users',
      columns: ['user_id'],
    },
    {
      table: 'user_followed_users',
      columns: ['followed_user_id'],
    },
    {
      table: 'posts',
      columns: ['authored_by_user_id'],
    },
    {
      table: 'comments',
      columns: ['authored_by_user_id'],
    },
    {
      table: 'comments',
      columns: ['inspired_by_post_id'],
    },
  ],
};

export default schema;