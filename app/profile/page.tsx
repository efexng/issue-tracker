import Image from 'next/image';
import styles from '../components/Profile.module.css';
import { Button, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Controller from '../Controller';
import ProfileNav from '../ProfileNav';
import ProfileNameComponent from './new/page';  // Renamed import


export default function Home() {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.NavBar}>
                    <div className={styles.Logo}>
                        <Image src='/logos.png' alt='Logo' width={190} height={57} />
                        <div className={styles.profileheader}> <h2>HELLO,</h2> <ProfileNameComponent /> </div>
                    </div>

                    <div className={styles.SearchBar}>
                        <TextField.Root placeholder="Search any Song...">
                            <TextField.Slot>
                                <MagnifyingGlassIcon className={styles.searchIcon} height="20" width="20" color='#737373' />
                            </TextField.Slot>
                        </TextField.Root>
                    </div>

                    <div className={styles.Profile}>
                        <Link href='/profile'>
                            <Button className={styles.ProfileButton}>My Profile</Button>
                        </Link>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.section}>
                        <div className={styles.sectionHeaderContainer}>
                            <h2 className={styles.sectionHeader}>My Profile</h2>
                        </div>

                        <div className={styles.cardContainer}>
                            <ProfileNav />
                        </div>

                        <div className={styles.accountoverviewmain}>
                            <div className={styles.profileImageContainer}>
                                <Image src='/UserProfile.png' alt='Profile Pic' width={180} height={180} />
                                <ProfileNameComponent />  {/* Updated component */}
                            </div>
                            <div className={styles.profileInfo}>
                                <div className={styles.profileInfoItem}>
                                    <label className={styles.profileLabel}>Name:</label>
                                    <h2>Name</h2>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <label className={styles.profileLabel}>Email:</label>
                                    <p>Email</p>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <label className={styles.profileLabel}>Date of Birth:</label>
                                    <p>Date of Birth</p>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <label className={styles.profileLabel}>Country or Origin:</label>
                                    <p>Country or Origin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Controller}>
                    <Controller />
                </div>
            </div>
        </>
    );
}
