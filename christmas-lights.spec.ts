import {ChristmasLight} from "./christmas-lights";

describe('christmas-lights', () => {
    it('should turn on a single christmas light', ()=>{
        const christmasLight = new ChristmasLight();
        christmasLight.turnOn();
        expect(christmasLight.status).toBe(true);
    })

    it('should turn off a single christmas light', ()=>{
        const christmasLight = new ChristmasLight();
        christmasLight.turnOff();
        expect(christmasLight.status).toBe(false);
    })

    it('should toggle a single christmas light', ()=>{
        const christmasLight = new ChristmasLight();
        christmasLight.toggle();
        expect(christmasLight.status).toBe(true);
        christmasLight.toggle();
        expect(christmasLight.status).toBe(false);
    })
})