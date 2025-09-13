import { WorkOrderConfig } from './config-schema';

describe('WorkOrderConfig Schema', () => {
  it('should have a valid structure for a simple template', () => {

    const sampleConfig: WorkOrderConfig = {
      templateName: 'Machine Inspection',
      description: 'A template for daily machine health checks.',
      sections: [
        {
          groupName: 'Safety',
          fields: [
            {
              type: 'safety-instructions',
              label: 'Safety Acknowledgment',
              id: 'safety-ack',
            },
          ],
        },
        {
          groupName: 'Basic Information',
          fields: [
            {
              type: 'text-input',
              label: 'Machine ID',
              id: 'machine-id',
              required: true,
            },
          ],
        },
      ],
    };

    expect(sampleConfig).toBeDefined();
    expect(sampleConfig.templateName).toEqual('Machine Inspection');
    expect(sampleConfig.sections[0].groupName).toEqual('Safety');
  });

  it('should correctly handle a variety of component types', () => {
    const complexConfig: WorkOrderConfig = {
      templateName: 'Troubleshooting Checklist',
      description: 'A template with various input types.',
      sections: [
        {
          groupName: 'System Status',
          fields: [
            {
              type: 'select-input',
              label: 'System Status',
              id: 'system-status',
              options: ['Operational', 'Degraded', 'Offline'],
              defaultValue: 'Operational',
            },
            {
              type: 'number-input',
              label: 'Temperature (C)',
              id: 'temp-celsius',
              required: false,
            },
          ],
        },
      ],
    };

    expect(complexConfig.sections[0].fields.length).toBe(2);
    expect(complexConfig.sections[0].fields[0].options).toEqual(['Operational', 'Degraded', 'Offline']);
  });
});
