import { create } from 'ipfs-http-client';

// IPFS configuration - Using a public gateway for this example
// For production, use a dedicated IPFS service like Infura, Pinata, or nft.storage
// with proper authentication
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
});

// Type for rental agreement metadata
export interface RentalAgreementMetadata {
  title: string;
  description: string;
  propertyAddress: string;
  propertyDetails: {
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    amenities: string[];
  };
  terms: {
    rentAmount: number;
    depositAmount: number;
    startDate: string;
    endDate: string;
    paymentDueDay: number;
    lateFeesPolicy: string;
  };
  landlordDetails: {
    name: string;
    contactInfo: string;
    walletAddress: string;
  };
  tenantDetails: {
    name: string;
    contactInfo: string;
    walletAddress: string;
  };
  additionalTerms: string;
  createdAt: string;
  updatedAt: string;
}

// Class to handle IPFS storage operations
export class IPFSStorage {
  
  /**
   * Upload a property image to IPFS
   * @param file The image file to upload
   * @returns The IPFS CID (Content Identifier)
   */
  static async uploadPropertyImage(file: File): Promise<string> {
    try {
      const fileContent = await file.arrayBuffer();
      const fileBuffer = Buffer.from(fileContent);
      
      // Add the file to IPFS
      const result = await ipfs.add(fileBuffer, {
        progress: (prog) => console.log(`Upload progress: ${prog}`)
      });
      
      console.log('File uploaded to IPFS with CID:', result.cid.toString());
      return result.cid.toString();
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
      throw new Error(`Failed to upload image: ${(error as any).message}`);
    }
  }
  
  /**
   * Upload rental agreement metadata to IPFS
   * @param metadata The rental agreement metadata
   * @returns The IPFS CID
   */
  static async uploadAgreementMetadata(metadata: RentalAgreementMetadata): Promise<string> {
    try {
      // Convert metadata to JSON string
      const jsonString = JSON.stringify(metadata);
      const buffer = Buffer.from(jsonString);
      
      // Add to IPFS
      const result = await ipfs.add(buffer);
      console.log('Metadata uploaded to IPFS with CID:', result.cid.toString());
      
      return result.cid.toString();
    } catch (error) {
      console.error('Error uploading metadata to IPFS:', error);
      throw new Error(`Failed to upload metadata: ${(error as any).message}`);
    }
  }
  
  /**
   * Retrieve file from IPFS by CID
   * @param cid The IPFS Content Identifier
   * @returns The file data
   */
  static async retrieveFromIPFS(cid: string): Promise<Uint8Array> {
    try {
      const chunks = [];
      
      // Stream the file data from IPFS
      for await (const chunk of ipfs.cat(cid)) {
        chunks.push(chunk);
      }
      
      // Combine the chunks
      return new Uint8Array(Buffer.concat(chunks));
    } catch (error) {
      console.error('Error retrieving from IPFS:', error);
      if (error instanceof Error) {
        throw new Error(`Failed to retrieve data: ${error.message}`);
      } else {
        throw new Error('Failed to retrieve data: Unknown error');
      }
    }
  }
  
/**
 * Retrieve and parse rental agreement metadata from IPFS
 * @param cid The IPFS Content Identifier
 * @returns The parsed metadata object
 */
}