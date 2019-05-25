const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const { expect } = chai
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const lib = require('./lib')
const axios = require('axios')
chai.use(chaiAsPromised)
chai.use(sinonChai)



describe('lib', () => {

    it('should be an object', () => {
        expect(lib).to.be.an("object")

        describe('#api', () => {

            it('should be an object', () => {
                expect(lib.api).to.be.an('object')

            })

            describe('#getTodos', () => {

                it('should be a function', function () {
                    expect(lib.api.getTodos).to.be.a('function')
                })
            })

        })

        describe('#domHelpers', () => {

            it('should be an object', () => {
                expect(lib.domHelpers).to.be.an('object')
            })

        })

        describe('#dom', () => {
            it('should be an object', () => {
                expect(lib.dom).to.be.an('object')
                console.log()
            })
        })

    })


})