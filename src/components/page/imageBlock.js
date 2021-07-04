import React from 'react' 
import { StaticImage } from "gatsby-plugin-image"
import { isBrowser } from "react-device-detect"

function ImageBlock() {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  
  return (
      <div className="flex">
        {isBrowser && <StaticImage src="../../content/assets/defmc_01.jpg" alt="DEFMC building" />}
        {isBrowser && <StaticImage src="../../content/assets/defmc_02.jpg" alt="DEFMC reception" />}
        <StaticImage src="../../content/assets/defmc_03.jpg" alt="DEFMC front" />
      </div>
  )
}

export default ImageBlock
