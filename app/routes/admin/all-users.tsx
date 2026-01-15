import React from 'react'
import {Header} from "../../../components";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {users} from "~/constants";
import {cn} from "~/lib/utils";



const AllUsers = () => {
    return (
        <main className='all-users wrapper'>
            <Header
                title='Manage Users Page'
                description='Filter, sort and access detailed user profiles'

            />
            <GridComponent dataSource={users} gridLines='None'>
                <ColumnsDirective>
                    <ColumnDirective
                     field="name"
                     headerText='Name'
                     width='200'
                     textAlign='Left'
                     template={(props: UserData)=>(
                         <div className='flex items-center gap-1.5 px-4'>
                            <img
                                src={props.imageUrl}
                                alt='user'
                                className='rounded-full size-8 aspect-square'
                            />
                             <span>{props.name}</span>
                         </div>
                     )}
                    />
                    <ColumnDirective
                        field='email'
                        headerText='Email'
                        width='150'
                        textAlign='Left'
                    />
                    <ColumnDirective
                        field='dateJoined'
                        headerText='Date Joined'
                        width='120'
                        textAlign='Left'
                    />
                    <ColumnDirective
                        field='itineraryCreated'
                        headerText='Trip Created'
                        width='130'
                        textAlign='Left'
                    />
                    <ColumnDirective
                        field='status'
                        headerText='Type'
                        width='100'
                        textAlign='Left'
                        template={({status}:UserData)=>(
                            <article className={cn('status-column',
                                status === 'user' ? 'bg-success-50': 'bg-light-300')}>
                                <div className={cn('size-1.5 rounded-full',
                                    status === 'user' ? 'bg-success-500' : 'bg-gray-500')} />
                                    <h3 className={cn('font-inter text-xs font-medium',
                                        status === 'user' ?
                                    'text-success-500' : 'text-gray-100')}>
                                        {status}
                                    </h3>

                            </article>
                        )}
                    />
                </ColumnsDirective>






            </GridComponent>
        </main>
    )
}
export default AllUsers
