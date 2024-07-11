import React from 'react';
import InfosSection from './infosSection.jsx';

function Profile({ userInfos, openModal }) {

    if (!userInfos) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="flex flex-col mr-auto ml-auto w-[900px]">
                <h1 className="font-[600] text-[30px] mb-[10px] mt-[15px]">Personal Details</h1>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col mr-[20px]">
                        <InfosSection
                            title="Personal Information"
                            info={userInfos[0].personal}
                            fields={['name', 'middleName', 'lastName', 'dateOfBirth']}
                            onEdit={() => openModal('personal')}
                        />
                        <InfosSection
                            title="Contact Details"
                            info={userInfos[0].contact}
                            fields={['email', 'mobileNumber', 'marketingPreferences']}
                            onEdit={() => openModal('contact')}
                        />
                    </div>
                    <div className="flex flex-col mr-[20px]">
                        <InfosSection
                            title="Home Address"
                            info={userInfos[0].address}
                            fields={['premise', 'thoroughfare', 'locality', 'postalCode', 'livedDuration']}
                            onEdit={() => openModal('address')}
                        />
                        <InfosSection
                            title="Nationality & Tax Residency"
                            info={userInfos[0].nationality}
                            fields={['citizenship', 'taxResidence']}
                            onEdit={() => openModal('nationality')}
                        />

                        <InfosSection
                            title="Employment Details"
                            info={userInfos[0].employee}
                            fields={['employmentStatus', 'industry', 'occupation']}
                            onEdit={() => openModal('employee')}
                        />

                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;