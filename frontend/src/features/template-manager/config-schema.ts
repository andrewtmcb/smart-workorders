/**
 * @fileoverview Configuration schema for work order views.
 *
 * This file defines the strict structure that the AI-generated JSON
 * configuration must follow. This schema acts as a contract, ensuring
 * that the frontend can reliably render a view from the configuration.
 */

// A union type of all valid component names that can be rendered
export type ComponentType =
  | 'text-input'
  | 'number-input'
  | 'select-input'
  | 'date-picker'
  | 'checklist'
  | 'file-upload'
  | 'safety-instructions'
  | 'nonconformance-input';

// A generic field definition that a component will render
export interface ComponentField {
  type: ComponentType;
  label: string;
  id: string;
  placeholder?: string;
  options?: string[]; // For 'select-input'
  defaultValue?: any;
  required?: boolean;
}

// A collection of fields to be grouped together
export interface ComponentGroup {
  groupName: string;
  fields: ComponentField[];
}

// The top-level configuration object for a work order template
export interface WorkOrderConfig {
  templateName: string;
  description: string;
  sections: ComponentGroup[];
}
