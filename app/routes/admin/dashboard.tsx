import React from 'react'
import {Header, StatsCard, Trip} from "../../../components";
import {dashboardStats, user, allTrips} from "~/constants";

const Dashboard = () => {


    const {totalUsers, totalTrips, tripsCreated, usersJoined, userRole} = dashboardStats;
    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Welcome ${user?.name ?? 'Guest'}`}
                description='Track activities trends and popular destinations in real time'

            />

            <section className='flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
                    <StatsCard
                        headerTitle='Total Users'
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle='Total Trips'
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle='Active Users'
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />
                </div>
                <div className=''>

                </div>
            </section>
            <section className='container'>
                <h1 className='text-xl font-semibold'>
                    Created Trips
                </h1>
                <div className='trip-grid'>
                    {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice})=>(
                        <Trip
                            key={id}
                            id={id.toString()}
                            name={name}
                            //@ts-ignore
                            imageUrl={imageUrls}
                            price={estimatedPrice}
                            tags={tags}
                            location={itinerary?.[0]?.location}
                        />
                    ))}
                </div>
            </section>

        </main>
    )
}
export default Dashboard
