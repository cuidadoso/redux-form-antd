import React, { PureComponent } from 'react';
import FormItem from 'antd/lib/form/FormItem';

export default function createComponent(AntdComponent, mapProps) {
  class InputComponent extends PureComponent {
    constructor(p) {
      super(p);
      this.state = {
        componentRef: this
      };
    }
    getRenderedComponent() {
      return this.state.componentRef;
    };

    render() {
      const {
        label,
        labelCol,
        wrapperCol,
        help,
        extra,
        validateStatus,
        hasFeedback = true,
        colon,
        required,
        ...rest
      } = mapProps(this.props);

      return (
        <FormItem
          label={label}
          ref={this.state.componentRef}
          wrapperCol={wrapperCol}
          labelCol={labelCol}
          help={help}
          hasFeedback={hasFeedback}
          extra={extra}
          validateStatus={validateStatus}
          colon={colon}
          required={required}
        >
          <AntdComponent {...rest} />
        </FormItem>
      );
    }
  }
  InputComponent.displayName = `Redux-form-ANTD${AntdComponent.displayName}`;

  return InputComponent;
}
