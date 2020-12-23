const graphql = require('graphql');
const _=require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//practice data
var books = [
    {name:'Name of the wind', genre:'Fic', id:'1'},
    {name:'The final', genre:'Non-fic', id:'2'},
    {name:'The earth', genre:'Fic', id:'3'}
];

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type: GraphQLString},
        name:{type: GraphQLString},
        genre:{type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type: GraphQLString}},
            resolve(parent,args){
                // gets data from db
                return _.find(books,{id:args.id});
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query:RootQuery
});
