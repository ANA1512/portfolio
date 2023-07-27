import React from 'react'

const SectionWrapper = (Component, idName) =>
function HOC() {
  return (
    <section>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component/>
    </section>
  )
}

export default SectionWrapper
