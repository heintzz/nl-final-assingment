import React from 'react'

export default function PersonalTeam({
  department,
  profile,
  style,
  ornament,
  ornamentStyle,
  additionalFlex,
}) {
  const titleStyle =
    'mx-auto mb-5 max-w-[320px] rounded-full bg-white text-[#B82534] font-semibold p-2 text-center text-md lg:text-lg'
  const containerFlex = `flex ${
    additionalFlex || ''
  } max-w-[100vw] gap-x-4 lg:gap-x-10 gap-y-5`
  const responsiveContainer = 'w-[145px] md:w-[120px] lg:w-[150px] xl:w-[160px]'
  const containerWFull = 'relative w-full pt-[100%]'
  const circleProfile =
    'absolute left-0 top-0 h-full w-full rounded-full border-[12px] border-[#ED707C] bg-white text-[#B82534] font-semibold'
  const profileName = 'mt-2 text-center text-white'

  return (
    <div className={`relative mx-auto max-w-fit ${style || ''}`}>
      <p className={titleStyle}>{department}</p>
      <div className={containerFlex}>
        {profile.map((profile, idx) => {
          return (
            <div className={responsiveContainer} key={idx}>
              <div className={containerWFull}>
                <div className={circleProfile}>
                  <img
                    src={profile.source}
                    alt={profile.name}
                    className="rounded-full hover:cursor-pointer"
                  />
                  <div
                    className="text-center absolute top-0 bg-black/70 w-full h-full rounded-full flex justify-center items-center text-white opacity-0 hover:opacity-100 hover:cursor-pointer"
                    style={{ transition: 'all 0.3s' }}
                  >
                    {profile.position}
                  </div>
                </div>
              </div>
              <p className={profileName}>{profile.name}</p>
            </div>
          )
        })}
      </div>
      {ornament && (
        <img
          src={ornament}
          alt={ornament}
          className={ornamentStyle || 'absolute top-2 right-2 -z-[1] w-[60%]'}
        />
      )}
    </div>
  )
}
