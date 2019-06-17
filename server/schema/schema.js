const graphql = require('graphql');
const {
        GraphQLObjectType,
        GraphQLSchema,
        GraphQLString
} = graphql;

const helloWorldType = new GraphQLObjectType({
    name: 'HelloWorld',
    fields: ()=>({
        texto: {type: GraphQLString}
    })
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        helloworld: {
            type: helloWorldType,
            resolve(){
                return {texto: "Hello World"};
            }
        }
   }
});

module.exports = new GraphQLSchema({
    query:queryType
})
