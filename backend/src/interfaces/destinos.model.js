import {model, Schema} from 'mongoose';

export const DestinoSchema = new Schema({
    name: {type: String, required: true},
    tours: {type: String, required: false},
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
export const DestinoModel = model('Destino', DestinoSchema);
