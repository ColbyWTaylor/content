import React from 'react';
import styles from './cover.module.scss';

export const Cover = ({title, subtitle, time, background, textColor, status, author}) => (<div 
    style={{
        backgroundImage: `url(${background})`,
        color: textColor
    }}
    className={styles.cover}>
    <div className="container">
        { (status !== "published" && typeof status === "string") ?
            <div className={"alert alert-danger "+styles.alert}>This is a draft lesson and it may still be under review</div>
            : ''
        }
        <div className="row">
            <div className="col">
                <small>{time}</small>
                <h1>{title}</h1>
                { (typeof author === 'undefined' || !author) ? '' : Array.isArray(author) ? 
                    <span>
                        by {author.map(a=> (<a className="author" rel="noopener noreferrer nofollow" target="_blank" href={"https://github.com/"+author}>@{author}</a>))}
                    </span>
                    :
                    <span>
                        by <a rel="noopener noreferrer nofollow" target="_blank" href={"https://github.com/"+author}>@{author}</a>
                    </span>
                }
            </div>
            <div className="col mt-4">
                {subtitle}
            </div>
        </div>
    </div>
</div>);
