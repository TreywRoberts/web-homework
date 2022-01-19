const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat } = graphql
const { TransactionModel } = require('../data-models/Transaction')
const TransactionType = require('./transaction-type')

const { UserModel } = require('../data-models/User')
const UserType = require('./user-type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields:{
    addTransaction: {
      type: TransactionType,
      args: {
        user_id: { type: GraphQLString },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat }
      },
      /* eslint-disable-next-line camelcase */
      resolve (parentValue, { user_id, description, merchant_id, debit, credit, amount }) {
        return (new TransactionModel({ user_id, description, merchant_id, debit, credit, amount })).save()
      }
    },
    deleteTransaction: {
      type: TransactionType,
      args: {
        id: { type: GraphQLString },
      },
      /* eslint-disable-next-line camelcase */
      resolve (parentValue, args) {
        const id = args.id
        return (TransactionModel.findByIdAndDelete(id))
      }
    },
    editTransaction: {
      type: TransactionType,
      args: {
        id: { type: GraphQLString },
        user_id: { type: GraphQLString },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat }
      },
      /* eslint-disable-next-line camelcase */
      resolve (parentValue, args) {
        const id = args.id
        return (TransactionModel.findByIdAndUpdate(id, args, {new: true}))
      }
    },
    addUser: {
      type: UserType,
      args:{
        firstName: { type: GraphQLString},
        lastName: { type: GraphQLString},
        dob: { type: GraphQLString }
      },
      /* eslint-disable-next-line camelcase */
      resolve (parentValue, {firstName, lastName, dob }) {
        return (new UserModel({firstName, lastName, dob })).save()
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      /* eslint-disable-next-line camelcase */
      resolve (parentValue, args) {
        const id = args.id
        return (UserModel.findByIdAndDelete(id))
      }
    },
  }
})

module.exports = mutation
