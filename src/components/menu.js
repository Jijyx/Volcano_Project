import React, { useState } from "react";
import {
    CCol, CRow, CMultiSelect, CButton, CModal, CModalHeader, CModalTitle, CModalBody,
    CModalFooter, CFormSelect,
    CForm
} from "@coreui/react-pro";
import * as cif from '@coreui/icons';
import CIcon from '@coreui/icons-react'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import countriesAndTimezones from "countries-and-timezones";

import './menu.css';

function MenuFilter() {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = React.useState([]);


    const flags = {
        de: cif.cifDe,
        es: cif.cifEs,
        gb: cif.cifGb,
        pl: cif.cifPl,
        us: cif.cifUs
    }

    // const countries = [
    //     {
    //         value: 'pl',
    //         label: 'Poland',
    //     },
    //     {
    //         value: 'de',
    //         label: 'Germany',
    //     },
    //     {
    //         value: 'us',
    //         label: 'United States',
    //     },
    //     {
    //         value: 'es',
    //         label: 'Spain',
    //     },
    //     {
    //         value: 'gb',
    //         label: 'United Kingdom',
    //     },
    // ]

    const continents = [
        {
            value: 'eu',
            label: 'Europe',
        },
        {
            value: 'na',
            label: 'North America',
        },
        {
            value: 'sa',
            label: 'South America',
        },
        {
            value: 'as',
            label: 'Asia',
        },
        {
            value: 'af',
            label: 'Africa',
        },
        {
            value: 'au',
            label: 'Australia',
        },
        {
            value: 'an',
            label: 'Antarctica',
        },
        {
            value: 'oc',
            label: 'Oceania',
        }
    ];

    const countries = Object.values(countriesAndTimezones.getAllCountries()).map(country => ({
        value: country.id,
        label: country.name,
        code: countriesAndTimezones.getCountry(country.id).isoAlpha2,
    }));


    return (
        <>
            <div className="menu-filter-button">
                <CButton color="info" onClick={() => setVisible(!visible)}><CIcon icon={cif.cilFilter} size="l" /></CButton>
            </div>
            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LabelVolcano"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LabelVolcano">Filter volcanos</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <div className="menu">
                        <div className="menu-layout-one">
                            <div className="menu-title">Select a filter</div>
                        </div>

                        <div className="filter-options">
                            <CRow>
                                <CCol md={6}>
                                    <CMultiSelect
                                        label="Select Continent"
                                        virtualScroller
                                        options={continents}
                                        optionsStyle="text"
                                        optionsTemplate={
                                            (option) => (
                                                <div className="d-flex">
                                                    <CIcon className="me-3" icon={flags[option.code]} size="xl" /> {option.label}
                                                </div>
                                            )
                                        }
                                    />
                                </CCol>
                                <CCol md={6}>
                                    <CMultiSelect
                                        label="Select Country"
                                        virtualScroller
                                        options={countries}
                                        optionsGroupsTemplate={
                                            (option) => (
                                                <div className="d-flex align-items-center">
                                                    <CIcon className="me-3" icon={flags[option.code]} size="xl" /> {option.label}
                                                </div>
                                            )
                                        }
                                    />
                                </CCol>
                                <CCol md={6}>
                                    <CMultiSelect
                                        label="Select a volcano type"
                                        options={[
                                            { label: 'Strato-volcano', value: '1' },
                                            { label: 'Regular', value: '2' },
                                        ]}
                                        optionsGroupsTemplate={
                                            (option) => (
                                                <div className="d-flex align-items-center">
                                                    <CIcon className="me-3" icon={flags[option.code]} size="xl" /> {option.label}
                                                </div>
                                            )
                                        }
                                    />
                                </CCol>
                                <CCol md={6}>
                                    <CFormSelect
                                        label="Filter by"
                                        options={
                                            [
                                                "Filter by",
                                                "Activity 🡩 (asc)",
                                                "Activity 🡫 (dsc)",
                                                "Height 🡩 (asc)",
                                                "Height 🡫 (dsc)",
                                            ]
                                        }
                                    />
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                    <CButton color="primary" onClick={() => setVisible(false)}>Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default MenuFilter;