const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const mongooseDelete = require('mongoose-delete')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const historyPaymentsSchema = new mongoose.Schema(
  {
    month: {
      type: Date,
      required: true
    },
    pendingPayments: {
      type: Array
    },
    totalReceived: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['current', 'finalized'],
      default: 'finalized',
      required: true
    },
    customData: {
      type: Object
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

historyPaymentsSchema.post('save', () => {
  console.log('INSERCION EN historyPayments')
})

historyPaymentsSchema.pre('findOneAndRemove', async () => {
  console.log('DELETE EN historyPayments')
})

historyPaymentsSchema.post('findOneAndUpdate', async () => {
  console.log('ACTUALIZACION EN historyPayments')
})

historyPaymentsSchema.plugin(mongooseDelete)
historyPaymentsSchema.plugin(mongoosePaginate)
historyPaymentsSchema.plugin(aggregatePaginate)
module.exports = mongoose.model('historypayments', historyPaymentsSchema)
