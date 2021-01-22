import React from 'react';

//Styles:
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CustomNumberField from '../dashboardComponents/CustomNumberField';
import CustomSelector from '../dashboardComponents/CustomSelector';
import { withStyles } from '@material-ui/core/styles';

import {
    ModalContainer,
    ModalHeader,
    ModalDesc,
} from '../dashboardComponents/UserPowerStatCard';

const AddRecordModalHeader = styled(ModalHeader)`
    font-size: 0.85em;
    font-weight: 400;
    margin: 0.5em 0;
`;

const InputContainer = styled.div`
    width: 13em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 0.7em;
`;

const InputDivider = styled.div`
    margin: 0 0.5em;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StyledButton = withStyles({
    root: {
        textTransform: 'capitalize',
    },
})(Button);

const RecordCardEditModal = ({
    openBoolean,
    closeFunction,
    weightFunction,
    setsFunction,
    repsFunction,
    unitFunction,
    submitHandler,
    existingStatSets,
    existingStatReps,
    existingStatWeight,
}) => {
    return (
        <>
            <Modal
                aria-labelledby="modal for add record"
                aria-describedby="modal for adding a new record"
                open={openBoolean}
                onClose={closeFunction}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBoolean}>
                    <ModalContainer>
                        <AddRecordModalHeader>
                            Edit your record!
                        </AddRecordModalHeader>
                        <InputContainer>
                            <InputDivider>
                                <CustomNumberField
                                    type="number"
                                    existingStat={existingStatWeight}
                                    changeFunc={weightFunction}
                                />
                                <CustomNumberField
                                    type="number"
                                    existingStat={existingStatSets}
                                    changeFunc={setsFunction}
                                />
                            </InputDivider>
                            <InputDivider>
                                <CustomSelector changeFunc={unitFunction} />
                                <CustomNumberField
                                    type="number"
                                    existingStat={existingStatReps}
                                    changeFunc={repsFunction}
                                />
                            </InputDivider>
                        </InputContainer>
                        <ButtonContainer>
                            <StyledButton
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={submitHandler}
                            >
                                Save
                            </StyledButton>
                            <StyledButton
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={closeFunction}
                            >
                                Cancel
                            </StyledButton>
                        </ButtonContainer>
                    </ModalContainer>
                </Fade>
            </Modal>
        </>
    );
};

export default RecordCardEditModal;
