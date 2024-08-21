import { stateInfo } from "../data/state_info";
import React, { useEffect, useRef } from 'react';

function AlaskaHawaii(clickFunc) {

    const AHRef = useRef(null);

    useEffect(() => {
        // Set the fills of the visited states to green once on page load
        const svgNode = AHRef.current;
        if (svgNode) {
            // Get all paths from the SVG
            const paths = svgNode.querySelectorAll("path");

            paths.forEach((path) => {
                const stateId = path.id;
                path.addEventListener("click", () => {
                  clickFunc(stateId);
                });
                // Change fill color for visited states
                if (stateInfo[stateId].visited) {
                    path.setAttribute("fill", "#2D6A4F");
                }
            });
        }
    });


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            ref={AHRef}
            id="AlaskaHawaii"
            width="100%" height="100%"
            viewBox="0 0 500 900">
            <path id="Alaska"
                 fill="currentColor" stroke="black" stroke-width="1"
                d="M 240.00,50.00
           C 240.00,50.00 260.00,60.00 260.00,60.00
             260.00,60.00 290.00,70.00 290.00,70.00
             290.00,70.00 310.00,70.00 310.00,70.00
             310.00,70.00 340.00,80.00 340.00,80.00
             340.00,80.00 370.00,80.00 370.00,80.00
             370.00,80.00 380.00,90.00 380.00,90.00
             380.00,90.00 380.00,300.00 380.00,300.00
             380.00,300.00 400.00,300.00 400.00,300.00
             400.00,300.00 420.00,320.00 420.00,320.00
             420.00,320.00 430.00,310.00 430.00,310.00
             430.00,310.00 440.00,310.00 440.00,310.00
             440.00,310.00 470.00,360.00 470.00,360.00
             470.00,360.00 480.00,370.00 480.00,370.00
             480.00,370.00 480.00,380.00 480.00,380.00
             480.00,380.00 470.00,400.00 470.00,400.00
             470.00,400.00 420.00,330.00 420.00,330.00
             420.00,330.00 400.00,310.00 400.00,310.00
             400.00,310.00 360.00,300.00 360.00,300.00
             360.00,300.00 330.00,280.00 330.00,280.00
             330.00,280.00 310.00,290.00 310.00,290.00
             310.00,290.00 330.00,300.00 330.00,300.00
             330.00,300.00 290.00,320.00 290.00,320.00
             290.00,320.00 290.00,280.00 290.00,280.00
             290.00,280.00 260.00,320.00 260.00,320.00
             260.00,320.00 280.00,330.00 280.00,330.00
             280.00,330.00 210.00,390.00 210.00,390.00
             210.00,390.00 80.00,450.00 80.00,450.00
             80.00,450.00 30.00,450.00 30.00,450.00
             30.00,450.00 30.00,440.00 30.00,440.00
             30.00,440.00 70.00,430.00 70.00,430.00
             70.00,430.00 80.00,440.00 80.00,440.00
             80.00,440.00 210.00,360.00 210.00,360.00
             210.00,360.00 240.00,320.00 240.00,320.00
             240.00,320.00 220.00,330.00 220.00,330.00
             220.00,330.00 200.00,320.00 200.00,320.00
             200.00,320.00 190.00,330.00 190.00,330.00
             190.00,330.00 190.00,300.00 190.00,300.00
             190.00,300.00 170.00,310.00 170.00,310.00
             170.00,310.00 150.00,280.00 150.00,280.00
             150.00,280.00 150.00,270.00 150.00,270.00
             150.00,270.00 160.00,240.00 160.00,240.00
             160.00,240.00 180.00,240.00 180.00,240.00
             180.00,240.00 200.00,230.00 200.00,230.00
             200.00,230.00 200.00,200.00 200.00,200.00
             200.00,200.00 180.00,220.00 180.00,220.00
             180.00,220.00 170.00,210.00 170.00,210.00
             170.00,210.00 150.00,210.00 150.00,210.00
             150.00,210.00 130.00,190.00 130.00,190.00
             130.00,190.00 130.00,180.00 130.00,180.00
             130.00,180.00 170.00,160.00 170.00,160.00
             170.00,160.00 170.00,180.00 170.00,180.00
             170.00,180.00 190.00,180.00 190.00,180.00
             190.00,180.00 200.00,170.00 200.00,170.00
             200.00,170.00 150.00,120.00 150.00,120.00
             150.00,120.00 150.00,110.00 150.00,110.00
             150.00,110.00 170.00,110.00 170.00,110.00
             170.00,110.00 180.00,100.00 180.00,100.00
             180.00,100.00 180.00,90.00 180.00,90.00
             180.00,90.00 190.00,80.00 190.00,80.00
             190.00,80.00 210.00,60.00 210.00,60.00
             210.00,60.00 230.00,60.00 230.00,60.00
             230.00,60.00 240.00,50.00 240.00,50.00 Z" />
            <path id="Hawaii"
                 fill="currentColor" stroke="black" stroke-width="1"
                d="M 162.88,672.25
           C 162.88,672.25 160.00,680.00 160.00,680.00
             160.00,680.00 167.25,677.50 167.25,677.50
             167.25,677.50 170.00,670.00 170.00,670.00
             170.00,670.00 162.88,672.25 162.88,672.25 Z
           M 180.00,670.00
           C 180.00,670.00 185.62,660.00 185.62,660.00
             185.62,660.00 200.00,660.00 200.00,660.00
             200.00,660.00 200.00,673.38 200.00,673.38
             200.00,673.38 190.00,676.88 190.00,676.88
             190.00,676.88 180.00,670.00 180.00,670.00 Z
           M 240.00,690.00
           C 240.00,690.00 250.00,682.25 250.00,682.25
             250.00,682.25 257.38,690.00 257.38,690.00
             257.38,690.00 264.88,700.00 264.88,700.00
             264.88,700.00 258.12,702.38 258.12,702.38
             258.12,702.38 245.38,700.00 245.38,700.00
             245.38,700.00 240.00,690.00 240.00,690.00 Z
           M 280.00,703.25
           C 280.00,703.25 280.00,710.00 280.00,710.00
             280.00,710.00 300.00,710.00 300.00,710.00
             300.00,710.00 300.00,703.12 300.00,703.12
             300.00,703.12 280.00,703.25 280.00,703.25 Z
           M 303.00,710.00
           C 303.00,710.00 302.12,720.00 302.12,720.00
             302.12,720.00 313.12,730.00 313.12,730.00
             313.12,730.00 321.50,730.00 321.50,730.00
             321.50,730.00 330.00,730.00 330.00,730.00
             330.00,730.00 330.00,720.00 330.00,720.00
             330.00,720.00 303.00,710.00 303.00,710.00 Z
           M 334.50,743.50
           C 334.50,743.50 350.00,750.00 350.00,750.00
             350.00,750.00 370.00,760.00 370.00,760.00
             370.00,760.00 370.00,770.00 370.00,770.00
             370.00,770.00 380.00,770.00 380.00,770.00
             380.00,770.00 380.00,780.00 380.00,780.00
             380.00,780.00 350.00,800.00 350.00,800.00
             350.00,800.00 340.00,800.00 340.00,800.00
             340.00,800.00 330.00,790.00 330.00,790.00
             330.00,790.00 330.00,760.00 330.00,760.00
             330.00,760.00 335.50,750.00 335.50,750.00
             335.50,750.00 334.50,743.50 334.50,743.50 Z
           M 287.50,715.50
           C 287.50,715.50 296.75,717.38 296.75,717.38
             296.75,717.38 298.38,722.88 298.38,722.88
             298.38,722.88 290.00,724.62 290.00,724.62
             290.00,724.62 287.50,715.50 287.50,715.50 Z
           M 306.00,730.00
           C 306.00,730.00 301.25,734.00 301.25,734.00
             301.25,734.00 310.00,734.00 310.00,734.00
             310.00,734.00 306.00,730.00 306.00,730.00 Z" />
        </svg>
    );
}

export default AlaskaHawaii;