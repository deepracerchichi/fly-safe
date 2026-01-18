import React from 'react'
import {Header} from "../../../components";
import {ComboBoxComponent} from "@syncfusion/ej2-react-dropdowns";
import type {Route} from './+types/create-trip';

export const loader = async()=>{
      
      try {


          const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,latlng,maps');

          //Check if response is okay
          if (!response.ok) {
              throw new Error('Failed to fetch countries');
          }


          const data = await response.json();

          if (!Array.isArray(data)) {
              console.log('Expected array got this: ', typeof data);
              return [];
          }



          return data.map((country: any) => (
              {
                  name: country.name.common,
                  flagUrl: country.flags.png,
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


    const handleChange=(key:keyof TripFormData, value: string | number)=> {

    }
    const handleSubmit = async ()=> {};
    const countries = loaderData as Country[];
    console.log(countries);
    const countryData=countries.map((country)=>(
        {
            text:  country.name,
            value: country.value,
            flagUrl: country.flagUrl,
        }
    ))

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
                            dataSource={countryData}
                            fields={{text: 'text', value: 'value',}}
                            placeholder='Select a country'
                            className='combo-box'
                            itemTemplate={(data:any)=>(
                                <div className='flex items-center'>
                                    <img src={data.flagUrl} className='w-5 h-3 ml-4' alt='flag'/>
                                    <h3 className='ml-[-12px]'>{data.text}</h3>
                                </div>
                            )}
                            valueTemplate={(data: any)=>(
                                <div className='flex flex-row items-center'>
                                    <img src={data.flagUrl} className='w-5 h-3' alt='flag'/>
                                    <h3 className='ml-[-6px]'>{data.text}</h3>
                                </div>
                            )}
                            change={(e: {value: string | undefined})=>{
                                if(e.value) {
                                    handleChange('country', e.value)
                            }}}
                            allowFiltering={true}
                            filtering={(e)=>{
                                const query=e.text.toLowerCase();

                                e.updateData(
                                    countries.filter(
                                        (country)=>
                                        country.name.toLowerCase().includes(query)
                                    ).map((
                                        (country) =>({
                                            text: country.name,
                                            value: country.value,
                                            flagUrl: country.flagUrl,
                                        })
                                    ))
                                )
                            }}
                        />
                    </div>
                </form>
            </section>
        </main>

    )
}
export default CreateTrip
