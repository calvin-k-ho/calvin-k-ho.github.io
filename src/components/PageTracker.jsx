import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function PageTracker() {
    const { pathname } = useLocation();
    const firstLoad = useRef(true);

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;
            return;
        }
        window.goatcounter?.count?.({ path: pathname });
    }, [pathname]);

    return null;
}

export default PageTracker;
