import React from "react";
import ColorListPallet from "../../Components/ColorListPallet/ColorListPallet";

const ColorCardScreen = () => {
    return (
		<div>
				<ColorListPallet tarjetas={[
					{likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']},
					{likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']},
					{likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']},
					{likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']},
					
					]}
				/>
		</div>
	)
};
export default ColorCardScreen