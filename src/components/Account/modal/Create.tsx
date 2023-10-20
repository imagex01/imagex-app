import * as React from 'react';
import {AccountModel} from "../../../types";
import {
    IonButton,
    IonButtons,
    IonChip, IonItem, IonRow, IonCol, IonText,
    IonContent,
    IonHeader, IonIcon, IonInput, IonSegment, IonSegmentButton,
    IonLabel,
    IonModal,
    IonTitle, IonTextarea, IonLoading, useIonToast,
    IonToolbar
} from "@ionic/react";
import {useEffect, useRef, useState} from "react";
import walletWorker from "../../../worker/walletWorker";
import {
    arrowBackOutline,
    chevronBackOutline, chevronDownOutline, chevronUpOutline,
    closeOutline,
} from "ionicons/icons";
import './create.css';
import {i18nxt} from "../../../locales";

interface Props {
    isOpen: boolean;
    onOk: (account?: AccountModel) => void;
    onClose: () => void;
}

export const AccountCreateModal: React.FC<Props> = ({isOpen, onOk, onClose}) => {


    // const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenImport, setIsOpenImport] = useState(false);
    const [showBackupModal, setShowBackupModal] = useState(false);
    const [rIndex, setRIndex] = useState(-1);
    const [showTip, setShowTip] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const [mnemonic, setMnemonic] = useState([]);
    const [tempMnemonic, setTempMnemonic] = useState<Array<string>>([]);
    const passwordRef = useRef(null);
    const passwordCfmRef = useRef(null);
    const textRef = useRef(null);

    const [segment, setSegment] = useState("mnemonic");

    const [present, dismiss] = useIonToast();

    useEffect(() => {
        // setIsOpenCreate(isOpen)
        genMen();
    }, [isOpen])

    const genMen = () => {
        walletWorker.generateMnemonic().then((rest: any) => {
            if (!!rest) {
                setMnemonic(rest.split(" "))
            }
        })
    }

    const confirm = async () => {
        //@ts-ignore
        // if (!passwordRef || !passwordCfmRef || !passwordRef.current || !passwordCfmRef.current || passwordRef.current && !passwordRef.current.value || passwordCfmRef.current && !passwordCfmRef.current.value) {
        //     present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("inputPassword")})
        //     return
        // }
        // //@ts-ignore
        // if (passwordRef.current.value.length < 8) {
        //     present({position: "top", duration: 2000, color: "danger", message:i18nxt.t("passwordTips")})
        //     return
        // }
        // //@ts-ignore
        // if (passwordRef.current.value !== passwordCfmRef.current.value) {
        //     present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("passwordNotMatch")})
        //     return
        // }
        //
        // //@ts-ignore
        // const accountId: any = await walletWorker.importMnemonic(mnemonic.join(" "), "", passwordRef.current.value, "", "");
        // const account: AccountModel = await walletWorker.accountInfo(accountId)
        // setShowBackupModal(false);
        // setIsOpenCreate(false)
        onOk()
    }


    const importKey = async () => {
        //@ts-ignore
        // if (!textRef || !textRef.current || !textRef.current.value) {
        //     present({
        //         position: "top",
        //         duration: 2000,
        //         color: "danger",
        //         message: segment ? i18nxt.t("inputMnemonic") : i18nxt.t("inputPrivateKey")
        //     })
        //     return
        // }
        // //@ts-ignore
        // if (!passwordRef || !passwordCfmRef || !passwordRef.current || !passwordCfmRef.current || passwordRef.current && !passwordRef.current.value || passwordCfmRef.current && !passwordCfmRef.current.value) {
        //     present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("inputPassword")})
        //     return
        // }
        // //@ts-ignore
        // if (passwordRef.current.value.length < 8) {
        //     present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("passwordTips")})
        //     return
        // }
        // //@ts-ignore
        // if (passwordRef.current.value !== passwordCfmRef.current.value) {
        //     present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("passwordNotMatch")})
        //     return
        // }
        //
        // let accountId
        // if (segment == "mnemonic") {
        //     //@ts-ignore
        //     accountId = await walletWorker.importMnemonic(textRef.current.value, "", passwordRef.current.value, "", "");
        // } else {
        //     //@ts-ignore
        //     accountId = await walletWorker.importPrivateKey(textRef.current.value, "", passwordRef.current.value, "", "");
        // }
        // if (accountId) {
        //     const account: AccountModel = await walletWorker.accountInfo(accountId)
        //     await walletWorker.setBackedUp(accountId);
        //     setIsOpenImport(false);
        //     onOk(account)
        // }
        onOk()
    }

    const preBackup = async () => {
        //@ts-ignore
        if (!passwordRef || !passwordCfmRef || !passwordRef.current || !passwordCfmRef.current || passwordRef.current && !passwordRef.current.value || passwordCfmRef.current && !passwordCfmRef.current.value) {
            present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("inputPassword")})
            return
        }
        //@ts-ignore
        if (passwordRef.current.value.length < 8) {
            present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("passwordTips")})
            return
        }
        //@ts-ignore
        if (passwordRef.current.value !== passwordCfmRef.current.value) {
            present({position: "top", duration: 2000, color: "danger", message: i18nxt.t("passwordNotMatch")})
            return
        }

        const mnemonicStr: any = await walletWorker.generateMnemonic();
        const rIndex = Math.floor(Math.random() * 12);
        const wordstr = mnemonic[rIndex];
        const tmp = mnemonicStr.split(" ");

        const genMen: Array<string> = [];
        for (let word of tmp) {
            if (genMen.length == 2) {
                break;
            }
            if (word != wordstr) {
                genMen.push(word);
            }
        }
        genMen.push(wordstr);
        genMen.sort(sortWord)

        setTempMnemonic(genMen);
        setRIndex(rIndex);
        setShowBackupModal(true);
    }


    const sortWord = (a: string, b: string) => {
        return a.localeCompare(b)
    }

    const confirmBackup = async (v:any) => {
        if (v == mnemonic[rIndex]) {
            await confirm();
            setShowBackupModal(false);
        } else {
            await preBackup()
            return Promise.reject(i18nxt.t("wrongSelect"))
        }
    }
    return <>
        <IonModal  isOpen={isOpen} className="identity-create-modal identity-create" onDidDismiss={() => {
            onClose();
        }} >
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start" onClick={()=>{
                        onClose();
                    }}>
                        <IonIcon src={arrowBackOutline} size="large"/>
                    </IonButtons>
                    <IonTitle>
                        <div className="pins-title">Create Identity</div>
                    </IonTitle>

                    <IonButton slot="end" className="btn-radius-head" onClick={() => {
                        setIsOpenImport(true)
                    }}>Recovery</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <div style={{backgroundColor: "#ffffff", height: "100%"}}>
                    <div className="men-content">
                        <div className="input-title">{i18nxt.t("mnemonicWords")}</div>
                        <div className="men-desc">
                            <div className="men-title">
                                {i18nxt.t("writeMnemonic")}
                            </div>
                            <div onClick={() => genMen()}>
                                <img src="./assets/img/icon/refreshOutline.png" height={20}/>
                            </div>
                        </div>
                        <div className="mnemonic-display" style={{height: showEye ? "auto" : "120px"}}>
                            <div style={{height: showEye ? "30px" : "100%"}}>
                                {
                                    showEye ? <>
                                            <div className="account-show" onClick={() => setShowEye(false)}>
                                                <IonIcon src={chevronUpOutline} size="large"/>
                                            </div>
                                        </> :
                                        <>
                                            <div className="account-show" onClick={() => setShowEye(true)}>
                                                <IonIcon src={chevronDownOutline} size="large"/>
                                            </div>
                                        </>
                                }
                            </div>
                            <div className="men-box">
                                <IonRow>
                                    {
                                        mnemonic.map(((value, index) => {
                                            return <IonCol sizeLg="3" key={index} sizeSm="4" sizeMd="4" size="4" className="col-padding-0">
                                                <div className="men-item">
                                                    <div className="men-num">{index + 1}</div>
                                                    <div className="men-text">
                                                        {showEye ? value : "****"}
                                                    </div>
                                                </div>
                                            </IonCol>
                                        }))
                                    }
                                </IonRow>
                            </div>
                            {
                                showEye &&  <div style={{height: 30}}></div>
                            }
                        </div>
                    </div>

                    <div className="input-item-box">
                        <div>
                            <div className="input-item-box-title" style={{width: 100}}>{i18nxt.t("password")}</div>
                            <div>
                                <IonInput ref={passwordRef} className="input-item" placeholder={i18nxt.t("inputPassword")} type="password" onFocus={() => {
                                    setShowTip(true)
                                }} onBlur={() => setShowTip(false)}/>
                            </div>
                            <div style={showTip?{ display: "block", lineHeight: "14px", paddingTop: 6}:{display: "none"}}><IonText color="primary">
                                <small>{i18nxt.t("passwordTip")}</small>
                            </IonText></div>
                        </div>


                        <div>
                            <div className="input-item-box-title" style={{width: 150}}>{i18nxt.t("confirmPassword")}</div>
                            <div>
                                <IonInput ref={passwordCfmRef} placeholder={i18nxt.t("inputPassword")} type="password" className="input-item"/>
                            </div>
                        </div>

                        <div>
                            <IonButton expand="block" className="unlock-box-btn pins-button-primary" disabled={showLoading} onClick={() => {
                                setShowLoading(true);
                                confirm().then(() => {
                                    setShowLoading(false);
                                }).catch(e => {
                                    setShowLoading(false);
                                    const err = typeof e == 'string' ? e : e.message;
                                    present({message: err, color: "danger", duration: 2000, position: "top"})
                                    console.error(e)
                                });
                            }}>{i18nxt.t("next")}</IonButton>
                        </div>
                    </div>
                </div>

                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={''}
                    duration={60000}
                />
            </IonContent>
        </IonModal>

        <IonModal isOpen={isOpenImport} className="identity-create-modal identity-import" onDidDismiss={() => {
            setIsOpenImport(false);
        }}>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start" onClick={() => {
                        setIsOpenImport(false)
                    }}>
                        <IonIcon src={arrowBackOutline} size="large"/>
                    </IonButtons>
                    <IonTitle>
                        <div className="pins-title">{i18nxt.t("recoverIdentity")}</div>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="no-scroll">
                <div className="seq-header-dark">
                    <IonSegment value={segment} className="seq-header-dark" color="secondary" mode="md" onIonChange={(e) => {
                        setSegment(e.detail.value as any)
                    }}>
                        <IonSegmentButton value="mnemonic" className="segment-button">
                        <span className={segment == "mnemonic" ? "seq-header-text" : "seq-header-text-2"}>
                            {i18nxt.t("mnemonicWords")}
                        </span>
                        </IonSegmentButton>
                        <IonSegmentButton value="privateKey" className="segment-button">
                            <span className={segment == "privateKey" ? "seq-header-text" : "seq-header-text-2"}>
                               {i18nxt.t("privateKey")}
                            </span>
                        </IonSegmentButton>
                    </IonSegment>
                </div>

                <div className="input-item-box">
                    <div>
                        <div className="input-item-box-title" style={{width: 150}}>{segment == "mnemonic" ? i18nxt.t("mnemonicWords") : i18nxt.t("privateKey")}</div>
                        <div>
                            <IonTextarea ref={textRef} rows={3} placeholder={segment == "mnemonic" ? i18nxt.t("inputMnemonic") : i18nxt.t("inputPrivateKey")}  className="input-item" />
                        </div>
                    </div>

                    <div>
                        <div className="input-item-box-title" style={{width: 100}}>{i18nxt.t("password")}</div>
                        <div>
                            <IonInput ref={passwordRef} placeholder="Input password" type="password" className="input-item" onFocus={() => {
                                setShowTip(true)
                            }} onBlur={() => setShowTip(false)}/>
                        </div>
                        <div style={showTip?{ display: "block", lineHeight: "14px", paddingTop: 6}:{display: "none"}}><IonText color="primary">
                            <small>{i18nxt.t("passwordTip")}</small>
                        </IonText></div>
                    </div>

                    <div>
                        <div className="input-item-box-title" style={{width: 160}}>{i18nxt.t("confirmPassword")}</div>
                        <div>
                            <IonInput ref={passwordCfmRef} placeholder="Input password" type="password" className="input-item" />
                        </div>
                    </div>

                    <div>
                        <IonButton expand="block" className="unlock-box-btn pins-button-primary"  disabled={showLoading} onClick={() => {
                            setShowLoading(true)
                            importKey().then(() => {
                                setShowLoading(false)
                            }).catch(e => {
                                const err = typeof e == 'string' ? e : e.message;
                                present({message: err, color: "danger", duration: 2000, position: "top"})
                                setShowLoading(false)
                            })
                        }}> {i18nxt.t("next")} </IonButton>
                    </div>
                </div>

                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Please wait...'}
                    duration={60000}
                />

            </IonContent>
        </IonModal>


        <IonModal
            mode="ios"
            isOpen={showBackupModal}
            canDismiss={true}
            onDidDismiss={() => {
                setShowBackupModal(false)
            }} className="role-select-list">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>
                        <div className="pins-title">Verification</div>
                    </IonTitle>
                    <IonIcon slot="end" src={closeOutline} size="large" onClick={() => {
                        setShowBackupModal(false)
                    }}/>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY className="ion-padding">
                <div style={{padding: '6px 20px'}}>{i18nxt.t("pleaseSelect")} <b><IonText
                    color="primary">#{rIndex + 1}th</IonText></b> {i18nxt.t("wordBased")}
                </div>
                <IonItem>
                    <IonLabel className="ion-text-wrap">
                        <IonRow>
                            {
                                tempMnemonic && tempMnemonic.map((v, i) => {
                                    return <IonChip color="primary" outline key={i} onClick={() => {
                                        setShowLoading(true)
                                        confirmBackup(v).then(() => {
                                            setShowLoading(false)
                                        }).catch(e => {
                                            setShowLoading(false)
                                            const err = typeof e == 'string' ? e : e.message;
                                            present({message: err, color: "danger", duration: 2000, position: "top"})
                                            console.error(e)
                                        })
                                    }}><b>{v}</b></IonChip>
                                })
                            }
                        </IonRow>
                    </IonLabel>
                </IonItem>
            </IonContent>

            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}
                duration={60000}
            />
        </IonModal>
    </>
}