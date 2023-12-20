import {model, Schema} from 'mongoose';

export const TourSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: String, required: true},
    days: {type: Number, required: true},
    guide: {type: String, required: true},
    destination: {type:String, required: true },
    images: {type: String, required: true},
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});
export const TourModel = model('Tour', TourSchema);
