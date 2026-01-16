import React from 'react'
import {Header} from "../../../components";
import {ComboBoxComponent} from "@syncfusion/ej2-react-dropdowns";
import type {Route} from './+types/create-trip';

export const loader = async()=>{
      
      try {


          const response = await fetch('https://restcountries.com/v3.1/all');

          //Check if response is okay
          if (!response.ok) {
              throw new Error('Failed to fetch countries');
          }


          const data = await response.json();

          if (!Array.isArray(data)) {
              console.error('Expected array got this: ', typeof data);
              return [];
          }


          return data.map((country: any) => (
              {
                  name: country.flag + country.name.common,
                  coordinates: country.latlng,
                  value: country.name.common,
                  openStreetMap: country.maps?.openStreetMap,
              }
          ));
      } catch (e) {
          console.log('Error fetching countries:', e)
          return [];
      }
}

const CreateTrip = ({loaderData}: Route.ComponentProps) => {

    const handleSubmit = async ()=> {};
    const countries = loaderData as Country[];
    console.log(countries);

    return (
        <main className='flex flex-col gap-10 pb-20 wrapper'>
            <Header title='Add a New Trip'
                    description='View and edit AI genereated travel plans'/>

            <section className='mt-2.5 wrapper-md'>
                <form className='trip-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='country'>
                            Country
                        </label>
                        <ComboBoxComponent
                            id='country'
                            dataSource={countries}
                        />
                    </div>
                </form>
            </section>
        </main>

    )
}
export default CreateTrip
