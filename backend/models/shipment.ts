export interface Shipment {
  id?: string;
  shipment_type: 'air' | 'sea' | 'road';
  reference_no?: string;
  container_number?: string;
  vessel_name?: string;
  voyage_number?: string;
  bl_number?: string;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
}
