import React from 'react';
import get from "lodash/get";

import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import withStyles from '@material-ui/core/styles/withStyles';

import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import CancelIcon from '@material-ui/icons/CloseOutlined';
import SuccessIcon from '@material-ui/icons/CheckOutlined';

import {EditedRowProps, EditedRowState} from './types';

import {workProgramSectionFields} from '../../enum';

import connect from './EditedRow.connect';
import styles from './EditedRow.styles';

class EditedRow extends React.Component<EditedRowProps, EditedRowState> {
    constructor(props: EditedRowProps) {
        super(props);

        this.state = {
            isEditMode: !props.section.id,
            section: props.section
        };
    }


    setEditModeTrue = () => {
        this.setState({isEditMode: true});
    }

    setEditModeFalse = () => {
        this.setState({isEditMode: false});
    }

    handleClickDelete = () => {
        if (this.props.section.id){
            this.props.actions.deleteSection(this.props.section.id);
        } else {
            this.props.removeNewSection();
        }
    }

    handleClickSave = () => {
        this.setEditModeFalse();

        this.props.actions.saveSection(this.state.section);

        if (!this.props.section.id){
            this.props.removeNewSection();
        }
    }

    handleClickCancel = () => {
        this.setState({section: this.props.section});
        this.setEditModeFalse();
    }

    handleChangeField = (field: string) => (e: React.ChangeEvent) => {
        const {section} = this.state;

        this.setState({
            section: {
                ...section,
                [field]: get(e, 'target.value')
            }
        })
    }

    render() {
        const {classes} = this.props;
        const {isEditMode, section} = this.state;

        return (
            <>
                <TableCell className={classes.centerCell}>
                    <>{section.ordinal_number}</>
                </TableCell>
                <TableCell className={classes.cell}>
                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.NAME]}
                                   className={classes.largeInput}
                                   onChange={this.handleChangeField(workProgramSectionFields.NAME)}
                        />
                        :
                        <>{section.name}</>
                    }
                </TableCell>
                <TableCell className={classes.centerCell}>
                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.CONTACT_WORK]}
                                   className={classes.smallInput}
                                   type="number"
                                   onChange={this.handleChangeField(workProgramSectionFields.CONTACT_WORK)}
                        />
                        :
                        <>{section.contact_work}</>
                    }
                </TableCell>
                <TableCell className={classes.centerCell}>
                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.LECTURE_CLASSES]}
                                   className={classes.smallInput}
                                   type="number"
                                   onChange={this.handleChangeField(workProgramSectionFields.LECTURE_CLASSES)}
                        />
                        :
                        <>{section.lecture_classes}</>
                    }
                </TableCell>
                <TableCell className={classes.centerCell}>
                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.LABORATORY]}
                                   className={classes.smallInput}
                                   type="number"
                                   onChange={this.handleChangeField(workProgramSectionFields.LABORATORY)}
                        />
                        :
                        <>{section.laboratory}</>
                    }
                </TableCell>
                <TableCell className={classes.centerCell}>

                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.PRACTICAL_LESSONS]}
                                   className={classes.smallInput}
                                   type="number"
                                   onChange={this.handleChangeField(workProgramSectionFields.PRACTICAL_LESSONS)}
                        />
                        :
                        <>{section.practical_lessons}</>
                    }
                 </TableCell>
                <TableCell className={classes.centerCell}>
                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.SPO]}
                                   className={classes.smallInput}
                                   type="number"
                                   onChange={this.handleChangeField(workProgramSectionFields.SPO)}
                        />
                        :
                        <>{section.SRO}</>
                    }
                </TableCell>
                <TableCell className={classes.centerCell}>
                    {isEditMode ?
                        <TextField variant="outlined"
                                   size="small"
                                   defaultValue={section[workProgramSectionFields.TOTAL_HOURS]}
                                   className={classes.smallInput}
                                   type="number"
                                   onChange={this.handleChangeField(workProgramSectionFields.TOTAL_HOURS)}
                        />
                        :
                        <>{section.total_hours}</>
                    }
                </TableCell>
                <TableCell className={classes.centerCell}>
                {!isEditMode ?
                    <>
                        <IconButton onClick={this.handleClickDelete}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={this.setEditModeTrue}>
                            <EditIcon />
                        </IconButton>
                    </>
                        :
                        <>
                            {section.id ?
                                <IconButton onClick={this.handleClickCancel}>
                                    <CancelIcon/>
                                </IconButton>
                                :
                                <IconButton onClick={this.handleClickDelete}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                            <IconButton onClick={this.handleClickSave}>
                                <SuccessIcon className={classes.saveIcon} />
                            </IconButton>
                        </>
                    }

                </TableCell>
            </>
        );
    }
}

// @ts-ignore
export default connect(withStyles(styles)(EditedRow));
