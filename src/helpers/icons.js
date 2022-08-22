import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faComments,
    faComment,
    faAt,
    faPlusCircle,
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faTrain,
    faDoorOpen,
    faLock,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
    return library.add(
	faComments,
	faComment,
	faAt,
	faPlusCircle,
	faTrash,
	faSignOutAlt,
	faEdit,
	faSpinner,
	faTrain,
	faDoorOpen,
	faLock,
	faEnvelope
    );
};

export default Icons;
