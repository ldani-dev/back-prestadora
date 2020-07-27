const mongoose = require('mongoose')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')
const mongoose_delete = require('mongoose-delete')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')
const clientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        // 1
        type: String,
        required: true
    },
    phone: {
        // 1
        type: String,
        required: true
    },
    address: {
        // 1
        type: String,
        required: true
    },
    document: {
        // 1
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    interes: {
        // 2
        type: Number,
        required: true
    },
    amount: {
        // 2
        type: Number,
        required: true
    },
    dateBegin: {
        type: Date,
        required: true
    },
    status: {
        // 2
        type: String,
        enum: ['pending', 'completed', 'legalAction', 'lost'],
        default: 'pending',
        required: true
    },
    jobRank: {
        // 2
        type: String,
        required: true
    },
    addressJob: {
        type: String,
        required: true
    },
    sectionJob: {
        type: String,
        required: true
    },
    references: {
        type: Array,
        required: true
    },
    payments: {
        type: Array
    },
    customData: {
        type: Object
    }
}, {
    versionKey: false,
    timestamps: true
})

clientsSchema.post('save', () => {
    console.log('INSERCION EN clientss')
})

clientsSchema.pre('findOneAndRemove', async() => {
    console.log('DELETE EN clientss')
})

clientsSchema.post('findOneAndUpdate', async() => {
    console.log('ACTUALIZACION EN clientss')
})

clientsSchema.plugin(mongoose_delete)
clientsSchema.plugin(mongoosePaginate)
clientsSchema.plugin(aggregatePaginate)
module.exports = mongoose.model('clients', clientsSchema)