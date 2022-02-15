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

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
