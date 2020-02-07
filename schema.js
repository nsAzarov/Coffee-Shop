const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const Product = require('./models/Product');
const Article = require('./models/Article');
const Author = require('./models/Author');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        _id: { type: GraphQLString },
        productID: { type: GraphQLInt },
        img: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        details: { type: GraphQLString },
        oldPrice: { type: GraphQLInt },
        newPrice: { type: GraphQLInt },
        length: { type: GraphQLInt },
        height: { type: GraphQLInt },
        width: { type: GraphQLInt },
        weight: { type: GraphQLInt }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        _id: { type: GraphQLString },
        authorID: { type: GraphQLInt },
        articlesID: { type: GraphQLList(GraphQLInt) },
        img: { type: GraphQLString },
        name: { type: GraphQLString },
        presentation: { type: GraphQLString }
    })
});

const ArticleType = new GraphQLObjectType({
    name: 'Article',
    fields: () => ({
        _id: { type: GraphQLString },
        articleID: { type: GraphQLInt },
        authorID: { type: GraphQLInt },
        img: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        text: { type: GraphQLString },
        date: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findOne({ authorID: parent.authorID })
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({})
            }
        },
        product: {
            type: ProductType,
            args: {
                ID: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return Product.findOne({ productID: args.ID })
            }
        },
        articles: {
            type: new GraphQLList(ArticleType),
            resolve(parent, args) {
                return Article.find({})
            }
        },
        article: {
            type: ArticleType,
            args: {
                ID: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return Article.findOne({ articleID: args.ID })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});