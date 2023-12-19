import {model, Schema} from 'mongoose';

export const ViajeSchema = new Schema({
    aerolinea: {type: String, required: true},
    n_vuelo: {type: String, required: true},
    destino: {type: String, required: true},
    fecha_hora: {type: String, required: true},
    precio: {type: Number, default: 3},
    nombre_hotel: {type: String, required: true},
    n_habitacion: {type: Number, required: true},
    portadaIMG: {type: String, required: true},
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});
export const TripModel = model('Vuelo', ViajeSchema);
