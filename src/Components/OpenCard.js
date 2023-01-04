import React from 'react'

const OpenCard = () => {
  return (
    <div className='bg-[#D9D9D9] rounded-lg h-2/4 md:h-96 overflow-y-auto'>
    <div className='flex flex-col'>
    {/* <div className='basis-1/4 flex-initial '>
    </div> */}
    <div className='flex-auto px-4 mx-4 mt-5 bg-[#D9D9D9] text-black'>
    <p className=' text-lg font-bold font-sans'>
    Determination of the protein folding, unfolding and refolding of spike glycoprotein of
    SARS Corona Virus-2 in Rubik’s Cube based statistical model and study of the thermodynamic
    interaction and kinetic behavior of the various equilibrated conformations with receptor of
    angiotensin converting enzyme-2 (ACE-2)” DST-SERB-POWER (FILENO. SPG/2021/004541).
    {/* Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nunc vulputate libero et velit
    interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos
     himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  */}
    </p>
    </div>
    <div className='flex-auto mb-3 mt-5 px-4 mx-4 text-black'>
    <p className=' text-2xl md:text-3xl'>
        Objectives
    </p>
    <p className=' text-sm ml-1 leading-5 md:leading-7 mt-4 pb-5 font-normal font-sans'>
    <ul className=' list-disc'>
        <li className='mb-2'>Develop a Rubik’s Cube Model (RCM) based
            simulation technique to understand the folding, 
            unfolding and refolding kinetics and various protein
            folding pathways of Severe Acute Respiratory Syndrome
            Coronavirus-2 (SARS-COV2) spike glycoprotein.
        </li>
        <li className='mb-2'>Study of protein-folding dynamics of spike glycoprotein with
            statistical energy landscape theory (SELT) based stochastic model.
        </li>
        <li className='mb-2'>Compare the similarity and dissimilarity between SELT and RCM model
             in details to understand the formation of various types of spike 
             glycoprotein conformations and the efficiency of the Rubik’s Cube model.
        </li>
        <li className='mb-2'>Calculation of the mean first-passage time (MFPT) using both SELT and 
            RCM model at different temperature. 
        </li>
        <li className='mb-2'>Understand the thermodynamics of molecular interaction between spike 
            glycoprotein and the newly obtained equilibrated folded-unfolded-refolded
            conformations with receptor of angiotensin-converting enzyme-2 (ACE-2) using
            Grand Canonical Monte Carlo (GCMC) Simulation and calculation of the binding energy.
        </li>
        
    </ul>
    </p>
    </div>
    {/* <div className='flex-auto rounded-lg shrink h-10 w-2/3 mx-auto my-auto mt-2 mb-3 px-4 bg-[#828282] text-white'>
    <button className='h-full w-full text-center text-sm font-semibold font-sans'>
      Read more
      </button>
    </div> */}
    </div>
    </div>
  )
}

export default OpenCard