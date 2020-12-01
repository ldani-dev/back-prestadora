const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const mongooseDelete = require('mongoose-delete')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const currentMonthSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    interest: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
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

currentMonthSchema.post('save', () => {
  console.log('INSERCION EN currentMonth')
})

currentMonthSchema.pre('findOneAndRemove', async () => {
  console.log('DELETE EN currentMonth')
})

currentMonthSchema.post('findOneAndUpdate', async () => {
  console.log('ACTUALIZACION EN currentMonth')
})

currentMonthSchema.plugin(mongooseDelete)
currentMonthSchema.plugin(mongoosePaginate)
currentMonthSchema.plugin(aggregatePaginate)
module.exports = mongoose.model('currentmonth', currentMonthSchema)
