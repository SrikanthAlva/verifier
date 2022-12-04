import { QRCode } from 'react-qr-svg';
import proofRequest from './assets/proofRequest';
import "./App.css"

const DEPLOYED_CONTRACT_ADDRESS = "0x38ee862d0da4cc92c37f096511b232a7A428c237";

let qrProofRequestJson: any = { ...proofRequest };
qrProofRequestJson.body.transaction_data.contract_address = DEPLOYED_CONTRACT_ADDRESS;
qrProofRequestJson.body.scope[0].rules.query.req = {
  "DateOfBirth": {
    "$lt": 20010101
  }
};
qrProofRequestJson.body.scope[0].rules.query.schema = {
  "url": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/fabc7a8a-0140-4fc1-9fe1-147321eaa8d9.json-ld",
  "type": "AadharClaimsCertificate"
};


let qrProofRequestJson2: any = { ...proofRequest };
qrProofRequestJson2.body.transaction_data.contract_address = DEPLOYED_CONTRACT_ADDRESS;
qrProofRequestJson2.body.scope[0].rules.query.req = {
  "TwoWheelerLicense": {
    "$eq": 1
  }
};
qrProofRequestJson2.body.scope[0].rules.query.schema = {
  "url": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/7998dd18-cfa9-491e-b28c-00746b75028a.json-ld",
  "type": "DriverLicenseClaimsCertificate"
};

const App = () => {

  return (
    <div className='app'>

    <div className="qr-data">
      <div>
        Scan Here to Verfiy your Aadhar Based Age Eligibilty 
      </div>
      <QRCode className='qr-code'
        level="Q"
        style={{ width: 256 }}
        value={JSON.stringify(qrProofRequestJson)}
      />
    </div>
    <hr/>
    <div className="qr-data">
        <div>
        Scan Here to Verify your Driver License Eligibilty 
      </div>
      <QRCode
        level="Q"
        style={{ width: 256 }}
        value={JSON.stringify(qrProofRequestJson2)}
      />
      </div>
            
    </div>
  )
};

// Exports
// ========================================================
export default App;
