var assert = require('assert');
var rs = require("jsrsasign");
require('../lib/index.js').addon(rs);

var oids = {
    "etsi-psd2":	"0.4.0.19495",
    "psd2-roles":	"0.4.0.19495.1",
    "psd2-role-psp-as":	"0.4.0.19495.1.1", // Account Servicing
    "psd2-role-psp-pi":	"0.4.0.19495.1.2", // Payment Initiation
    "psd2-role-psp-ai":	"0.4.0.19495.1.3", // Account Information
    "psd2-role-psp-ic":	"0.4.0.19495.1.4", // Issuing card-based instruments
    "psd2-qcStatement":	"0.4.0.19495.2",
    "psd2-qcPolicy":	"0.4.0.19495.3",
    "psd2-qcp-web":	"0.4.0.19495.3.1"
};

describe("EU PSD2 OIDs", function() {
    describe("KJUR.asn1.x509.OID", function() {
	var OID = rs.KJUR.asn1.x509.OID;
	var name2oid = OID.name2oid;
	var equal = assert.equal;

        it('existing sha256', function() {
            equal("2.16.840.1.101.3.4.2.1", name2oid("sha256"));
        });

	for (var name in oids) {
	    it("name2oid " + name,
	       function() {equal(oids[name], OID.name2oid(name));});
	}

	for (var name in oids) {
	    it("oid2name " + name,
	       function() {equal(name, OID.oid2name(oids[name]));});
	}
    });
});
