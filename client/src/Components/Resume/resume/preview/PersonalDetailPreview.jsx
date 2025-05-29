import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function PersonalDetailPreview({ resumeInfo }) {
    const { themeColor, firstName, lastName, jobTitle, address, phone, email } =
        resumeInfo || {};

    return (
        <div>
            <h2
                className="font-bold text-xl text-center"
                style={{ color: themeColor }}
            >
                {firstName} {lastName}
            </h2>
            <h2 className="text-center text-xs mt-2 font-medium">{jobTitle}</h2>

            <div
                className="flex justify-start gap-6 items-end mt-2 text-[0.7rem] font-normal"
                style={{ color: themeColor }}
            >
                {address && (
                    <div
                        className="flex items-center justify-center mt-1 font-normal"
                        style={{ color: themeColor }}
                    >
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{address}</span>
                    </div>
                )}
                {phone && (
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-1" />
                        <span>{phone}</span>
                    </div>
                )}
                {email && (
                    <div className="flex items-center">
                        <FaEnvelope className="mr-1" />
                        <span>{email}</span>
                    </div>
                )}
            </div>

            <hr className="my-1" style={{ borderColor: themeColor }} />
        </div>
    );
}

export default PersonalDetailPreview;
