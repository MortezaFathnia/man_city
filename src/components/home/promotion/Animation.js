import React from 'react';
import Zoom from 'react-reveal/Zoom';

import Jersey from '../../../Resources/images/jersey.jpg';

const PromotionAnimation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <div>
                    <Zoom>
                        <span>Win a</span>
                        <span>Jersey</span>
                    </Zoom>
                </div>
            </div>
            <div className="right">
                <div>
                    <Zoom>
                        <div style={{background:`url(${Jersey}) no-repeat`}}></div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default PromotionAnimation;