import React from 'react';

import vapeBackground from '../images/vapeBackground.png';
import r2b from '../images/r2b.jpg';
import fightFDARegs from '../images/fightFDARegs.png';
import CASAA from '../images/CASAA.png';

export default function Advocacy() {
    return (
        <div className='advocacy-wrapper'>
            <h2>FDA Regulations on vaping and vaping products</h2>

            <h4>What it is...</h4>
            <div className='what-it-is-wrapper'>
                <p><strong>On May 10, 2016, the FDA ruled to include vape products as tobacco products. Although there is a need for some regulation, the prohibitive expense of meeting the FDA’s approval process is, in reality, a slow-motion ban on Vaping. These regulations will take effect in 90 days (August 8, 2016) at which time no new product will be allowed to be sold without prior FDA approval. Current products will have 24 months to apply with a 12 month window for approval.</strong></p>
            </div>

            <h4>What it says...</h4>
            <div className='what-it-says-wrapper'>
                <div className='what-it-says left-column'>
                    <p><strong>• Consumers must be at least 18 years of age to purchase E-Cigarettes.</strong></p>
                    <p><strong>• Vape Shops are no longer allowed to give free samples.</strong></p>
                    <p><strong>• New labeling will be required for all products.</strong></p>
                    <p><strong>• As of August 8, 2016 there will be no new products, juice flavors, or accessories on the market.</strong></p>
                    <p><strong>• All products that became available after February 15, 2007, will have 24 months to submit an application forapproval from the FDA.</strong></p>
                    <p><strong>• The FDA will have 12 months from submission of application to approve or deny the application.</strong></p>
                    <p><strong>• If the application is not approved by the deadline, the product can no longer be sold.</strong></p>
                    <p><strong>• Vapor products can no longer be marketed as a “healthier alternative” or a “smokingcessation device”.</strong></p>
                </div>

                <div className='what-it-says right-column'>
                    <p><strong>The age requirement will not affect Ohio because it is already in effect.</strong></p>
                    <p><strong>The labeling requirement will affect the manufacturer rather than the consumer. It will require listed ingredients, warning labels, etc.</strong></p>
                    <p><strong>The ban on free samples will likely make giveaways a thing of the past. It will also affect the Juice Bar of Vape Shops. Shop owners will have the option of using only samples with no nicotine or will be required to charge a nominal fee to taste flavors prior to purchase.</strong></p>
                    <p><strong>Your local vape shop employees will no longer be able to “manufacture” tobacco products. They will not be allowed to build your coils or put together/take apart your vaping device.</strong></p>
                    <p><strong>The biggest change is going to be in the availability of vapor products. The required testing and application will cost manufacturers an estimated $1,000,000 per product removing 99.9% of vape products from the market!</strong></p>
                </div>
            </div>

            <h4>What you can do now...</h4>
            <div className='what-you-can-do-wrapper'>
                <div className='what-you-can-do left-column'>
                    <div className='r2b-wrapper'>
                        <div className='r2b-text-link'>
                            <a href='http://www.r2bsmokefree.org/contribute/'>Click to help fund the lawsuit against the FDA</a>
                        </div>
                        <a href='http://www.r2bsmokefree.org/contribute/'>
                            <img className='r2b' src={r2b} />
                        </a>
                    </div>

                    <div className='fight-FDA-wrapper'>
                        <a href='http://www.r2bsmokefree.org/contribute/'>
                            <img className='fight-FDA' src={fightFDARegs} />
                        </a>
                    </div>
                </div>

                <div className='what-you-can-do right-column'>
                    <div className='state-reps-wrapper'>
                        <div className='state-reps-text-link'>
                            <a href='https://www.votervoice.net/CASAA/campaigns/68346/respond'>Click to help fund the lawsuit against the FDA</a>
                        </div>
                        <a href='https://www.votervoice.net/CASAA/campaigns/68346/respond'>
                            <img className='casaa' src={CASAA} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}