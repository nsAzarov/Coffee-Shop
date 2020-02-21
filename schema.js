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
const Contact = require('./models/Contact');

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

const ContactType = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        message: { type: GraphQLString }
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
        category: { type: GraphQLString },
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
        n_products: {
            type: new GraphQLList(ProductType),
            args: {
                first: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return Product.find({}).limit(args.first)
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
        n_articles: {
            type: new GraphQLList(ArticleType),
            args: {
                first: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return Article.find({}).limit(args.first)
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

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addContact: {
            type: ContactType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                message: { type: GraphQLString }
            },
            resolve(parent, args) {
                const contact = new Contact({
                    name: args.name,
                    email: args.email,
                    message: args.message
                })
                contact.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});