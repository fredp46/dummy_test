import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Api from '../api'
import Foo from '../Foo';

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                value: '123'
            })
        }, 200)
    })
}

configure({adapter: new Adapter()});
var stb = sinon.createStubInstance(Api, {
    dummyApi: () => {
        return {
            value: "2222"
        }
    }
});

describe('A suite', function() {

    beforeEach(() => {
        // stubedFetch = sinon.stub(window, "fetch");
    });
    afterEach(() => {
        sinon.restore();
    });

  it('should render without throwing an error', async () => {
    const mySpy = sinon.spy(Foo.prototype, "componentDidMount")

      const component = mount(<Foo/>)
      await mySpy.getCall(0).returnValue
      component.find('.foo')
      expect(component.find('.foo').text()).toEqual("REAL")

  });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
});