import React from 'react'
import { useParams } from 'react-router-dom';
import TourDetail from '../../components/details/ToursDetail'

export default function ToursPage() {
  const { id } = useParams();
  return (
    <div>
        <TourDetail tour={id} />
    </div>
  )
}
