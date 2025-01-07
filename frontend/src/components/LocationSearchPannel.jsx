import React from 'react'


const LocationSearchPannel = (props) => {
    console.log(props);
  // smaple array for location 
  const locations = [
    "24B, Near Kapoore caffe hhrtmmb gh frg",
    "24B, bastia caffe hhrtmmb gh frg"
  ]
  return (
    <div>
      <h3>
        {/* location s here */}
        {
          locations.map(function(elem) {
            return <div onClick={() => {
              props.setvechiclePanel(true)
            }} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black  rounded-xl my-2 items-center my-4 justify-start'>
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
          })
        }
        </h3>
    </div>
  )
}

export default LocationSearchPannel
