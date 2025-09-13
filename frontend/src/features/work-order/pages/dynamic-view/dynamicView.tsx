import React from 'react';
import { ComponentField, WorkOrderConfig } from '../../../template-manager/config-schema';
import FormElement from '../../components/FormElement';
import Button from '../../../../common/Button';

// A map to link schema component types to actual React components
const componentMap: { [key: string]: React.ComponentType<ComponentField> } = {
  'text-input': FormElement,
  'number-input': FormElement,
  'select-input': FormElement,
  'date-picker': FormElement,
  // Add other components as you create them
};

const DynamicView: React.FC<{ config: WorkOrderConfig }> = ({ config }) => {
  if (!config) {
    return <div>No configuration loaded.</div>;
  }

  // A simple renderer function that handles each component type
  const renderComponent = (field: ComponentField) => {
    const ComponentToRender = componentMap[field.type];
    if (ComponentToRender) {
      return <ComponentToRender key={field.id} {...field} />;
    }
    console.warn(`No component found for type: ${field.type}`);
    return null;
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">{config.templateName}</h1>
      <p className="text-gray-600 text-center">{config.description}</p>
      
      {/* Iterate through each section in the config */}
      {config.sections.map((section, index) => (
        <div key={index} className="space-y-4 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-700">{section.groupName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Iterate through each field in the section and render it dynamically */}
            {section.fields.map(renderComponent)}
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-8">
        <Button onClick={() => console.log('Work Order Submitted!')}>
          Submit Work Order
        </Button>
      </div>
    </div>
  );
};

export default DynamicView;